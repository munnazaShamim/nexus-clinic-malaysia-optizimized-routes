export interface FAQItem {
  question: string;
  answer: string;
}

export function extractFAQsFromContent(content: string): FAQItem[] {
  const faqs: FAQItem[] = [];
  
  const faqSectionRegex = /<h2[^>]*>FAQs?<\/h2>([\s\S]*?)(?=<h2|$)/i;
  const faqMatch = content.match(faqSectionRegex);
  
  if (!faqMatch) {
    // console.log('No FAQ section found');
    return faqs;
  }
  
  const faqContent = faqMatch[1];
//   console.log('FAQ section content:', faqContent.substring(0, 500));

  const questionAnswerRegex = /<p[^>]*><strong>(\d+\.\s*[^<]+?)<\/strong>\s*<br\s*\/?>\s*([\s\S]*?)<\/p>/gi;
  
  let match;
  while ((match = questionAnswerRegex.exec(faqContent)) !== null) {
    // console.log('Found match:', match[0]);
    
    const question = match[1]
      .replace(/<[^>]*>/g, '')
      .replace(/^\d+\.\s*/, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    const answer = match[2]
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .trim();
    
    // console.log('Extracted Q:', question);
    // console.log('Extracted A:', answer.substring(0, 50) + '...');
    
    if (question && answer && question.length > 5 && answer.length > 10) {
      faqs.push({ 
        question: question.endsWith('?') ? question : question + '?', 
        answer 
      });
    }
  }
  
  if (faqs.length === 0) {
    // console.log('Trying alternative pattern...');
    
    const paragraphs = faqContent.split('</p>');
    
    for (let i = 0; i < paragraphs.length; i++) {
      const para = paragraphs[i] + '</p>';
      
      if (para.includes('<strong>') && para.match(/\d+\./)) {
        const strongMatch = para.match(/<strong>(\d+\.\s*[^<]+?)<\/strong>/);
        if (strongMatch) {
          const question = strongMatch[1]
            .replace(/<[^>]*>/g, '')
            .replace(/^\d+\.\s*/, '')
            .trim();
          
          let answer = para
            .replace(/<p[^>]*>/, '')
            .replace(/<strong>.*?<\/strong>/, '')
            .replace(/<br\s*\/?>/g, ' ')
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
          
          if (question && answer) {
            faqs.push({ 
              question: question.endsWith('?') ? question : question + '?', 
              answer 
            });
          }
        }
      }
    }
  }
  
//   console.log(`Extracted total ${faqs.length} FAQs`);
  return faqs;
}


export function extractFAQsForYourSite(content: string): FAQItem[] {
  const faqs: FAQItem[] = [];

  const faqIndex = content.indexOf('<h2 style="text-align: justify;">FAQs</h2>');
  if (faqIndex === -1) return faqs;
  
  const afterFAQs = content.substring(faqIndex);
  
  const paragraphs = afterFAQs.split('</p>');
  
  for (let i = 0; i < paragraphs.length; i++) {
    const para = paragraphs[i] + '</p>';
    
    const strongMatch = para.match(/<strong>(\d+\.\s*[^<]+?)<\/strong>/);
    if (strongMatch) {
      // Extract question
      let question = strongMatch[1]
        .replace(/<[^>]*>/g, '')
        .replace(/^\d+\.\s*/, '')
        .trim();
      
      // Extract answer (everything after the strong tag)
      let answer = para
        .replace(/<p[^>]*>/, '')
        .replace(/<strong>.*?<\/strong>/, '')
        .replace(/<br\s*\/?>/g, ' ')
        .replace(/<[^>]*>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      
      // If answer is empty, look at next paragraph
      if (!answer && i + 1 < paragraphs.length) {
        const nextPara = paragraphs[i + 1] + '</p>';
        answer = nextPara
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
      }
      
      if (question && answer) {
        faqs.push({
          question: question.endsWith('?') ? question : question + '?',
          answer
        });
      }
    }
  }
  
  return faqs;
}