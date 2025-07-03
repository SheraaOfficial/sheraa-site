-- First create sample profiles for the founder stories
INSERT INTO public.profiles (
  id, first_name, last_name, avatar_url, headline, bio, company, industry, location
) VALUES 
(
  '00000000-0000-0000-0000-000000000001',
  'Sarah', 'Ahmed',
  '/lovable-uploads/5ab0dc9b-b752-42ff-ab16-a2c51a0ee68e.png',
  'AI EdTech Founder | Building the Future of Learning',
  'Computer Science student at AUS passionate about using AI to democratize education across the UAE.',
  'LearnForward', 'EdTech', 'Sharjah, UAE'
),
(
  '00000000-0000-0000-0000-000000000002',
  'Ahmed', 'Al Mansouri',
  '/lovable-uploads/67019a34-88c0-4c00-ba3f-2e89761a0678.png',
  'Sustainability Innovator | Circular Economy Advocate',
  'Environmental Engineer turning waste into resources. Making the world cleaner one innovation at a time.',
  'GreenCycle', 'Sustainability', 'Sharjah, UAE'
),
(
  '00000000-0000-0000-0000-000000000003',
  'Fatima', 'Al Zahra',
  '/lovable-uploads/1461e9a9-fd41-4085-86e1-6765d0fd4f59.png',
  'Typography Designer | Arabic Font Creator',
  'Graphic designer preserving Arabic culture through modern digital typography.',
  'ArabicType', 'Creative Economy', 'Sharjah, UAE'
),
(
  '00000000-0000-0000-0000-000000000004',
  'Omar', 'Khalil',
  '/lovable-uploads/91a7f993-9696-46a1-96a7-59d67803f50f.png',
  'FinTech Entrepreneur | Student Payment Solutions',
  'Building financial tools that make university life easier for students across the region.',
  'PayEasy', 'FinTech', 'Sharjah, UAE'
),
(
  '00000000-0000-0000-0000-000000000005',
  'Maryam', 'Hassan',
  '/lovable-uploads/c685b8f9-faed-488e-aa6e-2d85cf6191f1.png',
  'AgriTech Innovator | Food Security Champion',
  'IoT engineer working to achieve UAE food security through smart farming technology.',
  'SmartFarm', 'AgriTech', 'Sharjah, UAE'
);