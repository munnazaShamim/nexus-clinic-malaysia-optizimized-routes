import { useState, useEffect } from "react";
import { wordpressService } from "../services/wordpress";
import { adaptWordPressPosts } from "../utils/blogAdapter";
import type { WordPressPost } from "../types/wordpress";
import type { Post, CategoryValue } from "../types/blog";

interface UseBlogDataReturn {
  posts: Post[];
  featuredPost: Post | undefined;
  loading: boolean;
  error: string | null;
  loadMore: () => Promise<void>;
  hasMore: boolean;
  refetch: () => Promise<void>;
}

export function useBlogData(
  activeCategory: CategoryValue,
  searchQuery: string,
  initialPage = 1,
  postsPerPage = 9,
): UseBlogDataReturn {
  const [allPosts, setAllPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async (page: number, isLoadMore = false) => {
    try {
      setLoading(true);
      setError(null);

      // Map your category to WordPress category slugs
      const categoryMap: Record<CategoryValue, string | null> = {
        all: null,
        skincare: "skincare",
        weight: "weight-loss",
        aging: "anti-aging",
        treatments: "treatments",
      };

      const categorySlug = categoryMap[activeCategory];
      let fetchedPosts: WordPressPost[];

      // Always include search query if present
      const params: any = {
        page,
        perPage: postsPerPage,
        search: searchQuery || undefined, // Pass search query to API
      };

      if (categorySlug && activeCategory !== "all") {
        fetchedPosts = await wordpressService.getPostsByCategory(
          categorySlug,
          params,
        );
      } else {
        fetchedPosts = await wordpressService.getPosts(params);
      }

      // Get total posts from response headers if available
      // Note: You might need to modify your service to return headers

      if (isLoadMore) {
        setAllPosts((prev) => [...prev, ...fetchedPosts]);
      } else {
        setAllPosts(fetchedPosts);
      }

      // Check if there are more posts
      setHasMore(fetchedPosts.length === postsPerPage);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch posts");
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  // Reset and fetch when category or search changes
  useEffect(() => {
    setCurrentPage(1);
    setAllPosts([]); // Clear posts when category/search changes
    fetchPosts(1, false);
  }, [activeCategory, searchQuery]);

  const loadMore = async () => {
    if (!loading && hasMore) {
      await fetchPosts(currentPage + 1, true);
    }
  };

  const refetch = async () => {
    setCurrentPage(1);
    setAllPosts([]);
    await fetchPosts(1, false);
  };

  const adaptedPosts = adaptWordPressPosts(allPosts);
  const featuredPost = adaptedPosts.find((p) => p.featured);

  return {
    posts: adaptedPosts,
    featuredPost,
    loading,
    error,
    loadMore,
    hasMore,
    refetch,
  };
}
