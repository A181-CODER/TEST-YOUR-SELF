import type { Question, AnalysisResult, DimensionResult, Dimension } from './types';

export const questions: Question[] = [
  // THINKING MODE (5 questions)
  {
    id: 1, dimension: 'thinking',
    en: 'When facing a complex problem, you naturally tend to:',
    ar: 'عندما تواجه مشكلة معقدة، تميل بطبيعتك إلى:',
    options: [
      { trait: 'analytical', en: 'Break it into smaller parts and analyze each one', ar: 'تقسيمها إلى أجزاء أصغر وتحليل كل جزء' },
      { trait: 'intuitive', en: 'Trust your instinct about the right direction', ar: 'الثقة بحدسك حول الاتجاه الصحيح' },
      { trait: 'creative', en: 'Look for angles others might have missed', ar: 'البحث عن زوايا ربما فاتت الآخرين' },
      { trait: 'systematic', en: 'Follow a proven methodology step by step', ar: 'اتباع منهجية مجربة خطوة بخطوة' },
    ],
  },
  {
    id: 2, dimension: 'thinking',
    en: 'When learning something new, you prefer to:',
    ar: 'عند تعلم شيء جديد، تفضل أن:',
    options: [
      { trait: 'analytical', en: 'Understand the underlying theory and evidence', ar: 'تفهم النظرية الأساسية والأدلة' },
      { trait: 'intuitive', en: 'Get a feel for it through direct experience', ar: 'تستوعبه من خلال التجربة المباشرة' },
      { trait: 'creative', en: 'Experiment freely and explore on your own', ar: 'تجرب بحرية وتستكشف بنفسك' },
      { trait: 'systematic', en: 'Follow a structured course or curriculum', ar: 'تتبع منهجاً دراسياً منظماً' },
    ],
  },
  {
    id: 3, dimension: 'thinking',
    en: 'Your workspace and notes tend to be:',
    ar: 'مساحة عملك وملاحظاتك تميل لأن تكون:',
    options: [
      { trait: 'analytical', en: 'Organized logically — categories, labels, priorities', ar: 'منظمة منطقياً — تصنيفات وعناوين وأولويات' },
      { trait: 'intuitive', en: 'Minimal — you keep most things in your head', ar: 'بسيطة — تحتفظ بمعظم الأشياء في ذهنك' },
      { trait: 'creative', en: 'Full of sketches, ideas, scattered but meaningful', ar: 'مليئة بالرسومات والأفكار، متناثرة لكن ذات معنى' },
      { trait: 'systematic', en: 'Neat and filed — everything has its place', ar: 'مرتبة ومصنفة — كل شيء في مكانه' },
    ],
  },
  {
    id: 4, dimension: 'thinking',
    en: 'When explaining an idea to someone, you typically:',
    ar: 'عند شرح فكرة لشخص ما، عادةً ما:',
    options: [
      { trait: 'analytical', en: 'Present facts, data, and logical reasoning', ar: 'تقدم الحقائق والبيانات والمنطق' },
      { trait: 'intuitive', en: 'Use stories, metaphors, and emotional resonance', ar: 'تستخدم القصص والاستعارات والتأثير العاطفي' },
      { trait: 'creative', en: 'Paint a vivid picture of possibilities', ar: 'ترسم صورة حية للاحتمالات' },
      { trait: 'systematic', en: 'Outline clear steps and processes', ar: 'توضح خطوات وعمليات واضحة' },
    ],
  },
  {
    id: 5, dimension: 'thinking',
    en: 'When reading or consuming content, you gravitate toward:',
    ar: 'عند القراءة أو استهلاك المحتوى، تنجذب إلى:',
    options: [
      { trait: 'analytical', en: 'Research findings, data analysis, investigations', ar: 'نتائج الأبحاث وتحليل البيانات والتحقيقات' },
      { trait: 'intuitive', en: 'Human stories, cultural insights, psychology', ar: 'القصص الإنسانية والرؤى الثقافية وعلم النفس' },
      { trait: 'creative', en: 'Innovation, design, future trends', ar: 'الابتكار والتصميم واتجاهات المستقبل' },
      { trait: 'systematic', en: 'How-to guides, frameworks, best practices', ar: 'الأدلة العملية والأطر والممارسات المثلى' },
    ],
  },

  // DRIVE / MOTIVATION (5 questions)
  {
    id: 6, dimension: 'drive',
    en: 'What would make you feel most fulfilled in your career?',
    ar: 'ما الذي سيشعرك بأكبر قدر من الرضا في مسيرتك المهنية؟',
    options: [
      { trait: 'achievement', en: 'Reaching the top of your field', ar: 'الوصول إلى قمة مجالك' },
      { trait: 'impact', en: 'Knowing you genuinely changed lives', ar: 'معرفة أنك غيّرت حياة الناس فعلاً' },
      { trait: 'knowledge', en: 'Mastering a subject with deep expertise', ar: 'إتقان موضوع بخبرة عميقة' },
      { trait: 'stability', en: 'Building a secure, balanced life', ar: 'بناء حياة مستقرة ومتوازنة' },
    ],
  },
  {
    id: 7, dimension: 'drive',
    en: 'When you imagine your ideal week, it involves:',
    ar: 'عندما تتخيل أسبوعك المثالي، فهو يتضمن:',
    options: [
      { trait: 'achievement', en: 'Making visible, measurable progress toward goals', ar: 'إحراز تقدم واضح وقابل للقياس نحو أهدافك' },
      { trait: 'impact', en: 'Contributing to something larger than yourself', ar: 'المساهمة في شيء أكبر منك' },
      { trait: 'knowledge', en: 'Diving deep into a fascinating subject', ar: 'التعمق في موضوع مثير للاهتمام' },
      { trait: 'stability', en: 'A comfortable rhythm with time for what matters', ar: 'إيقاع مريح مع وقت لما يهمك' },
    ],
  },
  {
    id: 8, dimension: 'drive',
    en: 'What frustrates you the most?',
    ar: 'ما الذي يحبطك أكثر شيء؟',
    options: [
      { trait: 'achievement', en: 'Stagnation and lack of forward movement', ar: 'الركود وعدم التقدم للأمام' },
      { trait: 'impact', en: 'Indifference toward real problems', ar: 'اللامبالاة تجاه المشاكل الحقيقية' },
      { trait: 'knowledge', en: 'Shallow thinking and intellectual laziness', ar: 'التفكير السطحي والكسل الفكري' },
      { trait: 'stability', en: 'Chaos, disorder, and broken commitments', ar: 'الفوضى وعدم النظام وإخلاف الوعود' },
    ],
  },
  {
    id: 9, dimension: 'drive',
    en: 'When choosing between opportunities, the deciding factor is:',
    ar: 'عند الاختيار بين الفرص، العامل الحاسم هو:',
    options: [
      { trait: 'achievement', en: 'Growth potential and advancement trajectory', ar: 'إمكانية النمو ومسار التقدم' },
      { trait: 'impact', en: 'The mission and purpose behind it', ar: 'الرسالة والهدف من ورائها' },
      { trait: 'knowledge', en: 'Intellectual stimulation and learning depth', ar: 'التحفيز الفكري وعمق التعلم' },
      { trait: 'stability', en: 'Security, benefits, and life balance', ar: 'الأمان والمزايا والتوازن الحياتي' },
    ],
  },
  {
    id: 10, dimension: 'drive',
    en: 'You feel most energized when:',
    ar: 'تشعر بأكبر قدر من الحيوية عندما:',
    options: [
      { trait: 'achievement', en: 'You hit a milestone or receive recognition', ar: 'تحقق إنجازاً أو تحصل على تقدير' },
      { trait: 'impact', en: 'You witness the positive effect of your work', ar: 'تشاهد الأثر الإيجابي لعملك' },
      { trait: 'knowledge', en: 'You have a breakthrough insight', ar: 'تتوصل لفكرة أو اكتشاف جديد' },
      { trait: 'stability', en: 'Everything runs smoothly as planned', ar: 'يسير كل شيء بسلاسة كما خُطط له' },
    ],
  },

  // SOCIAL ORIENTATION (5 questions)
  {
    id: 11, dimension: 'social',
    en: 'In a team project, you naturally:',
    ar: 'في مشروع جماعي، أنت بطبيعتك:',
    options: [
      { trait: 'independent', en: 'Take ownership of your section and work alone', ar: 'تتولى مسؤولية جزئك وتعمل بشكل مستقل' },
      { trait: 'collaborative', en: 'Enjoy brainstorming and working closely with others', ar: 'تستمتع بالعصف الذهني والعمل عن قرب مع الآخرين' },
      { trait: 'leading', en: 'Step up to coordinate and guide the group', ar: 'تتقدم لتنسيق وتوجيه المجموعة' },
      { trait: 'supporting', en: 'Help others with their tasks and fill the gaps', ar: 'تساعد الآخرين في مهامهم وتسد الثغرات' },
    ],
  },
  {
    id: 12, dimension: 'social',
    en: 'At a professional gathering, you typically:',
    ar: 'في تجمع مهني، عادةً ما:',
    options: [
      { trait: 'independent', en: 'Have a few meaningful one-on-one conversations', ar: 'تجري بضع محادثات فردية عميقة' },
      { trait: 'collaborative', en: 'Move between groups, energized by interaction', ar: 'تتنقل بين المجموعات، ممتلئاً بالطاقة من التفاعل' },
      { trait: 'leading', en: 'Naturally become the focal point of discussion', ar: 'تصبح بشكل طبيعي محور النقاش' },
      { trait: 'supporting', en: 'Listen carefully, observe dynamics, support others', ar: 'تستمع بعناية وتراقب الديناميكيات وتدعم الآخرين' },
    ],
  },
  {
    id: 13, dimension: 'social',
    en: 'Regarding feedback from others:',
    ar: 'بخصوص التغذية الراجعة من الآخرين:',
    options: [
      { trait: 'independent', en: 'You consider it, but ultimately trust your own judgment', ar: 'تأخذها بعين الاعتبار لكنك تثق بحكمك في النهاية' },
      { trait: 'collaborative', en: 'You actively seek diverse perspectives', ar: 'تسعى بنشاط للحصول على وجهات نظر متنوعة' },
      { trait: 'leading', en: 'You give more feedback than you receive', ar: 'تعطي تغذية راجعة أكثر مما تتلقى' },
      { trait: 'supporting', en: 'You carefully absorb it and adjust accordingly', ar: 'تستوعبها بعناية وتعدّل مسارك وفقاً لها' },
    ],
  },
  {
    id: 14, dimension: 'social',
    en: 'When conflict arises in a group:',
    ar: 'عندما ينشأ خلاف في مجموعة:',
    options: [
      { trait: 'independent', en: 'You step back and handle your part independently', ar: 'تنسحب وتتعامل مع جزئك بشكل مستقل' },
      { trait: 'collaborative', en: 'You mediate and find common ground', ar: 'تتوسط وتجد أرضية مشتركة' },
      { trait: 'leading', en: 'You take a decisive stance to resolve it', ar: 'تتخذ موقفاً حاسماً لحله' },
      { trait: 'supporting', en: 'You work quietly to ease tensions', ar: 'تعمل بهدوء لتخفيف التوترات' },
    ],
  },
  {
    id: 15, dimension: 'social',
    en: 'You perform at your best when:',
    ar: 'تقدم أفضل أداء عندما:',
    options: [
      { trait: 'independent', en: 'Given full autonomy with minimal oversight', ar: 'تُمنح استقلالية كاملة مع حد أدنى من الإشراف' },
      { trait: 'collaborative', en: 'Part of an engaged, communicative team', ar: 'تكون جزءاً من فريق متفاعل ومتواصل' },
      { trait: 'leading', en: 'You are setting the direction and vision', ar: 'تكون أنت من يحدد الاتجاه والرؤية' },
      { trait: 'supporting', en: 'Helping a team succeed behind the scenes', ar: 'تساعد الفريق على النجاح من وراء الكواليس' },
    ],
  },

  // PROBLEM APPROACH (5 questions)
  {
    id: 16, dimension: 'problem',
    en: 'When a project goes wrong, your first instinct is to:',
    ar: 'عندما يفشل مشروع ما، غريزتك الأولى هي:',
    options: [
      { trait: 'strategic', en: 'Zoom out and reassess the overall strategy', ar: 'التراجع وإعادة تقييم الاستراتيجية الكلية' },
      { trait: 'practical', en: 'Roll up your sleeves and fix what is broken', ar: 'شمّر عن ساعديك وأصلح ما هو معطل' },
      { trait: 'innovative', en: 'Reimagine the entire approach', ar: 'إعادة تصور النهج بالكامل' },
      { trait: 'methodical', en: 'Review the process to find exactly where it failed', ar: 'مراجعة العملية لتحديد نقطة الفشل بدقة' },
    ],
  },
  {
    id: 17, dimension: 'problem',
    en: 'You most admire people who:',
    ar: 'أكثر من تُعجب بهم هم الذين:',
    options: [
      { trait: 'strategic', en: 'Think several moves ahead of everyone', ar: 'يفكرون عدة خطوات قبل الجميع' },
      { trait: 'practical', en: 'Get things done efficiently and reliably', ar: 'ينجزون الأمور بكفاءة وموثوقية' },
      { trait: 'innovative', en: 'Create what nobody imagined possible', ar: 'يبتكرون ما لم يتخيله أحد' },
      { trait: 'methodical', en: 'Are thorough, precise, and never miss a detail', ar: 'يتسمون بالدقة والشمولية ولا يفوتهم تفصيل' },
    ],
  },
  {
    id: 18, dimension: 'problem',
    en: 'When planning an important event or trip:',
    ar: 'عند التخطيط لحدث أو رحلة مهمة:',
    options: [
      { trait: 'strategic', en: 'You evaluate all options and optimize the outcome', ar: 'تقيّم كل الخيارات وتحسّن النتيجة' },
      { trait: 'practical', en: 'You book the essentials and figure the rest out later', ar: 'تحجز الأساسيات وتحل الباقي لاحقاً' },
      { trait: 'innovative', en: 'You seek unique, off-the-beaten-path experiences', ar: 'تبحث عن تجارب فريدة وغير تقليدية' },
      { trait: 'methodical', en: 'You create a detailed day-by-day plan', ar: 'تضع خطة مفصلة يوماً بيوم' },
    ],
  },
  {
    id: 19, dimension: 'problem',
    en: 'Your relationship with risk is:',
    ar: 'علاقتك بالمخاطرة:',
    options: [
      { trait: 'strategic', en: 'Calculated — you assess probability vs. reward', ar: 'محسوبة — تقيّم الاحتمالات مقابل العائد' },
      { trait: 'practical', en: 'Pragmatic — you weigh what is actually realistic', ar: 'عملية — تزن ما هو واقعي فعلاً' },
      { trait: 'innovative', en: 'Bold — great outcomes require bold moves', ar: 'جريئة — النتائج العظيمة تتطلب خطوات جريئة' },
      { trait: 'methodical', en: 'Careful — you minimize uncertainty first', ar: 'حذرة — تقلل عدم اليقين أولاً' },
    ],
  },
  {
    id: 20, dimension: 'problem',
    en: 'When given a new tool or system:',
    ar: 'عندما تُعطى أداة أو نظاماً جديداً:',
    options: [
      { trait: 'strategic', en: 'You evaluate how it fits your broader workflow', ar: 'تقيّم كيف يتناسب مع سير عملك الأوسع' },
      { trait: 'practical', en: 'You start using it immediately for real tasks', ar: 'تبدأ باستخدامه فوراً في مهام حقيقية' },
      { trait: 'innovative', en: 'You explore all its features and hidden potential', ar: 'تستكشف كل ميزاته وإمكانياته المخفية' },
      { trait: 'methodical', en: 'You read the manual or documentation first', ar: 'تقرأ الدليل أو التوثيق أولاً' },
    ],
  },

  // ADAPTABILITY (5 questions)
  {
    id: 21, dimension: 'adaptability',
    en: 'When your industry undergoes major change:',
    ar: 'عندما يمر مجالك بتغيير كبير:',
    options: [
      { trait: 'pioneering', en: 'You see it as a chance to lead the transformation', ar: 'تراها فرصة لقيادة التحول' },
      { trait: 'adaptive', en: 'You adjust your skills to stay relevant', ar: 'تكيّف مهاراتك لتبقى في الصدارة' },
      { trait: 'steady', en: 'You continue what works until forced to change', ar: 'تستمر بما ينجح حتى تُجبر على التغيير' },
      { trait: 'cautious', en: 'You observe carefully before making any moves', ar: 'تراقب بعناية قبل اتخاذ أي خطوة' },
    ],
  },
  {
    id: 22, dimension: 'adaptability',
    en: 'Your relationship with routines:',
    ar: 'علاقتك بالروتين:',
    options: [
      { trait: 'pioneering', en: 'You constantly break and reinvent them', ar: 'تكسرها وتعيد اختراعها باستمرار' },
      { trait: 'adaptive', en: 'You have them but bend them when needed', ar: 'لديك روتين لكنك تثنيه عند الحاجة' },
      { trait: 'steady', en: 'You value them deeply — they ground you', ar: 'تقدّرها بعمق — فهي تثبّتك' },
      { trait: 'cautious', en: 'You plan carefully and dislike surprises', ar: 'تخطط بعناية ولا تحب المفاجآت' },
    ],
  },
  {
    id: 23, dimension: 'adaptability',
    en: 'When someone proposes a radical new idea:',
    ar: 'عندما يقترح شخص فكرة جذرية جديدة:',
    options: [
      { trait: 'pioneering', en: 'You get excited and want to push it even further', ar: 'تتحمس وتريد دفعها أبعد' },
      { trait: 'adaptive', en: 'You see potential and think about making it work', ar: 'ترى إمكانية وتفكر في كيفية تحقيقها' },
      { trait: 'steady', en: 'You are open but need to see solid evidence first', ar: 'أنت منفتح لكنك تحتاج أدلة قوية أولاً' },
      { trait: 'cautious', en: 'You want it tested and validated thoroughly', ar: 'تريد اختبارها والتحقق منها بشكل شامل' },
    ],
  },
  {
    id: 24, dimension: 'adaptability',
    en: 'Throughout your life, you have generally:',
    ar: 'طوال حياتك، كنت عموماً:',
    options: [
      { trait: 'pioneering', en: 'Been the first to try new things', ar: 'أول من يجرب الأشياء الجديدة' },
      { trait: 'adaptive', en: 'Evolved smoothly with changing circumstances', ar: 'تطورت بسلاسة مع الظروف المتغيرة' },
      { trait: 'steady', en: 'Built deep expertise in consistent areas', ar: 'بنيت خبرة عميقة في مجالات ثابتة' },
      { trait: 'cautious', en: 'Made careful, well-researched transitions', ar: 'أجريت تحولات مدروسة ومبنية على بحث' },
    ],
  },
  {
    id: 25, dimension: 'adaptability',
    en: 'How do you feel about uncertainty?',
    ar: 'ما شعورك تجاه عدم اليقين؟',
    options: [
      { trait: 'pioneering', en: 'It is where the greatest opportunities hide', ar: 'هو حيث تختبئ أعظم الفرص' },
      { trait: 'adaptive', en: 'It is manageable with the right mindset', ar: 'يمكن التعامل معه بالعقلية الصحيحة' },
      { trait: 'steady', en: 'It is uncomfortable but sometimes necessary', ar: 'غير مريح لكنه ضروري أحياناً' },
      { trait: 'cautious', en: 'It should be minimized through careful planning', ar: 'يجب تقليله من خلال التخطيط الدقيق' },
    ],
  },
];

const dimensionNames: Record<Dimension, { en: string; ar: string }> = {
  thinking: { en: 'Cognitive Style', ar: 'النمط المعرفي' },
  drive: { en: 'Core Motivation', ar: 'الدافع الأساسي' },
  social: { en: 'Social Orientation', ar: 'التوجه الاجتماعي' },
  problem: { en: 'Problem-Solving Approach', ar: 'منهج حل المشكلات' },
  adaptability: { en: 'Adaptability Profile', ar: 'ملف التكيّف' },
};

const traitLabels: Record<string, { en: string; ar: string }> = {
  analytical: { en: 'Analytical', ar: 'تحليلي' },
  intuitive: { en: 'Intuitive', ar: 'حدسي' },
  creative: { en: 'Creative', ar: 'إبداعي' },
  systematic: { en: 'Systematic', ar: 'منهجي' },
  achievement: { en: 'Achievement', ar: 'الإنجاز' },
  impact: { en: 'Impact', ar: 'التأثير' },
  knowledge: { en: 'Knowledge', ar: 'المعرفة' },
  stability: { en: 'Stability', ar: 'الاستقرار' },
  independent: { en: 'Independent', ar: 'مستقل' },
  collaborative: { en: 'Collaborative', ar: 'تعاوني' },
  leading: { en: 'Leading', ar: 'قيادي' },
  supporting: { en: 'Supporting', ar: 'داعم' },
  strategic: { en: 'Strategic', ar: 'استراتيجي' },
  practical: { en: 'Practical', ar: 'عملي' },
  innovative: { en: 'Innovative', ar: 'ابتكاري' },
  methodical: { en: 'Methodical', ar: 'منهجي دقيق' },
  pioneering: { en: 'Pioneering', ar: 'ريادي' },
  adaptive: { en: 'Adaptive', ar: 'متكيّف' },
  steady: { en: 'Steady', ar: 'ثابت' },
  cautious: { en: 'Cautious', ar: 'حذر' },
};

export { dimensionNames, traitLabels };

const thinkingProfiles: Record<string, { title: { en: string; ar: string }; desc: { en: string; ar: string } }> = {
  analytical: {
    title: { en: 'The Analytical Mind', ar: 'العقل التحليلي' },
    desc: {
      en: 'You process the world through logic, evidence, and structured reasoning. You naturally decompose complexity into manageable parts and seek patterns in data. Your thinking is precise, methodical, and grounded in facts. You are at your sharpest when you can examine evidence before drawing conclusions.',
      ar: 'تعالج العالم من خلال المنطق والأدلة والتفكير المنظم. تميل بطبيعتك لتفكيك التعقيد إلى أجزاء قابلة للإدارة والبحث عن أنماط في البيانات. تفكيرك دقيق ومنهجي ومرتكز على الحقائق. تكون في أفضل حالاتك عندما تتمكن من فحص الأدلة قبل استخلاص النتائج.',
    },
  },
  intuitive: {
    title: { en: 'The Intuitive Mind', ar: 'العقل الحدسي' },
    desc: {
      en: 'You perceive the world through patterns, feelings, and holistic awareness. You often know the answer before you can articulate why. Your strength lies in reading between the lines — sensing what data alone cannot reveal. You process information on multiple levels simultaneously, making you exceptionally perceptive.',
      ar: 'تدرك العالم من خلال الأنماط والمشاعر والوعي الشامل. غالباً تعرف الإجابة قبل أن تتمكن من توضيح السبب. قوتك تكمن في القراءة بين السطور — استشعار ما لا تستطيع البيانات وحدها كشفه. تعالج المعلومات على مستويات متعددة في آنٍ واحد، مما يجعلك شديد الفطنة.',
    },
  },
  creative: {
    title: { en: 'The Creative Mind', ar: 'العقل الإبداعي' },
    desc: {
      en: 'You process the world through imagination, possibilities, and original connections. Where others see limitations, you see raw material for innovation. Your thinking is divergent — you naturally generate multiple solutions and see potential that others overlook. You thrive in ambiguity and turn uncertainty into opportunity.',
      ar: 'تعالج العالم من خلال الخيال والاحتمالات والروابط الأصلية. حيث يرى الآخرون قيوداً، أنت ترى مادة خاماً للابتكار. تفكيرك تباعدي — تولّد بطبيعتك حلولاً متعددة وترى إمكانيات يغفل عنها الآخرون. تزدهر في الغموض وتحوّل عدم اليقين إلى فرصة.',
    },
  },
  systematic: {
    title: { en: 'The Systematic Mind', ar: 'العقل المنهجي' },
    desc: {
      en: 'You process the world through order, frameworks, and reliable structures. You build mental models that bring clarity to chaos. Your thinking is organized, sequential, and thorough — you ensure nothing falls through the cracks. You create systems that others can depend on and scale.',
      ar: 'تعالج العالم من خلال النظام والأطر والهياكل الموثوقة. تبني نماذج ذهنية تجلب الوضوح للفوضى. تفكيرك منظم ومتسلسل وشامل — تضمن ألا يسقط أي شيء من الشقوق. تبني أنظمة يمكن للآخرين الاعتماد عليها وتطويرها.',
    },
  },
};

interface StrengthMapping {
  traits: string[];
  strength: { en: string; ar: string };
  detail: { en: string; ar: string };
}

const strengthMappings: StrengthMapping[] = [
  { traits: ['analytical', 'strategic'], strength: { en: 'Strategic Analysis', ar: 'التحليل الاستراتيجي' }, detail: { en: 'You can dissect complex situations and identify the optimal path forward.', ar: 'يمكنك تفكيك المواقف المعقدة وتحديد المسار الأمثل للمضي قدماً.' } },
  { traits: ['analytical', 'methodical'], strength: { en: 'Precision Thinking', ar: 'الدقة في التفكير' }, detail: { en: 'Your attention to detail and logical rigor make your work exceptionally reliable.', ar: 'اهتمامك بالتفاصيل وصرامتك المنطقية تجعل عملك موثوقاً بشكل استثنائي.' } },
  { traits: ['analytical', 'knowledge'], strength: { en: 'Deep Research', ar: 'البحث المعمّق' }, detail: { en: 'You have a rare ability to investigate subjects with both depth and objectivity.', ar: 'لديك قدرة نادرة على دراسة المواضيع بعمق وموضوعية.' } },
  { traits: ['creative', 'innovative'], strength: { en: 'Visionary Innovation', ar: 'الابتكار الرؤيوي' }, detail: { en: 'You naturally generate breakthrough ideas that reshape how problems are solved.', ar: 'تولّد بطبيعتك أفكاراً اختراقية تعيد تشكيل طريقة حل المشكلات.' } },
  { traits: ['creative', 'pioneering'], strength: { en: 'Trailblazing Creativity', ar: 'الإبداع الريادي' }, detail: { en: 'You don\'t just think differently — you act on it, creating paths where none existed.', ar: 'أنت لا تفكر بشكل مختلف فحسب — بل تتصرف وفقاً لذلك، وتخلق مسارات لم تكن موجودة.' } },
  { traits: ['intuitive', 'impact'], strength: { en: 'Empathetic Leadership', ar: 'القيادة المتعاطفة' }, detail: { en: 'You understand people deeply and channel that understanding into meaningful change.', ar: 'تفهم الناس بعمق وتوجه هذا الفهم نحو تغيير ذي معنى.' } },
  { traits: ['intuitive', 'collaborative'], strength: { en: 'Emotional Intelligence', ar: 'الذكاء العاطفي' }, detail: { en: 'You read group dynamics effortlessly and bring out the best in others.', ar: 'تقرأ ديناميكيات المجموعة بسهولة وتستخرج أفضل ما في الآخرين.' } },
  { traits: ['systematic', 'methodical'], strength: { en: 'Operational Excellence', ar: 'التميز التشغيلي' }, detail: { en: 'You build reliable systems that scale and sustain quality over time.', ar: 'تبني أنظمة موثوقة قابلة للتوسع وتحافظ على الجودة مع الوقت.' } },
  { traits: ['systematic', 'stability'], strength: { en: 'Structural Integrity', ar: 'النزاهة الهيكلية' }, detail: { en: 'You create order and dependability that others rely on.', ar: 'تخلق نظاماً وموثوقية يعتمد عليها الآخرون.' } },
  { traits: ['leading', 'achievement'], strength: { en: 'Decisive Leadership', ar: 'القيادة الحاسمة' }, detail: { en: 'You set ambitious goals and rally people to achieve them.', ar: 'تضع أهدافاً طموحة وتحشد الناس لتحقيقها.' } },
  { traits: ['leading', 'pioneering'], strength: { en: 'Transformational Leadership', ar: 'القيادة التحويلية' }, detail: { en: 'You inspire others to embrace change and reach for what seems impossible.', ar: 'تلهم الآخرين لتبني التغيير والسعي نحو ما يبدو مستحيلاً.' } },
  { traits: ['independent', 'knowledge'], strength: { en: 'Self-Directed Mastery', ar: 'الإتقان الذاتي' }, detail: { en: 'You pursue expertise with discipline and depth, needing no external push.', ar: 'تسعى للخبرة بانضباط وعمق، دون حاجة لدافع خارجي.' } },
  { traits: ['collaborative', 'impact'], strength: { en: 'Community Building', ar: 'بناء المجتمع' }, detail: { en: 'You bring people together around shared purpose and collective impact.', ar: 'تجمع الناس حول هدف مشترك وتأثير جماعي.' } },
  { traits: ['practical', 'adaptive'], strength: { en: 'Resourceful Execution', ar: 'التنفيذ الحيلة' }, detail: { en: 'You get things done with whatever is available, adapting on the fly.', ar: 'تنجز الأمور بما هو متاح، متكيفاً أثناء العمل.' } },
  { traits: ['strategic', 'leading'], strength: { en: 'Strategic Vision', ar: 'الرؤية الاستراتيجية' }, detail: { en: 'You see the big picture and guide others toward it with clarity.', ar: 'ترى الصورة الكبيرة وتوجه الآخرين نحوها بوضوح.' } },
  { traits: ['practical', 'achievement'], strength: { en: 'Results-Driven Action', ar: 'التوجه نحو النتائج' }, detail: { en: 'You combine ambition with pragmatism, consistently delivering tangible outcomes.', ar: 'تجمع بين الطموح والعملية، محققاً نتائج ملموسة باستمرار.' } },
  { traits: ['supporting', 'stability'], strength: { en: 'Reliable Backbone', ar: 'العمود الفقري الموثوق' }, detail: { en: 'You provide the steady, dependable foundation every team needs.', ar: 'توفر الأساس الثابت والموثوق الذي يحتاجه كل فريق.' } },
  { traits: ['adaptive', 'collaborative'], strength: { en: 'Versatile Teamwork', ar: 'العمل الجماعي المرن' }, detail: { en: 'You flex your approach to fit any team dynamic and situation.', ar: 'تكيّف نهجك ليتناسب مع أي ديناميكية فريق وموقف.' } },
  { traits: ['innovative', 'knowledge'], strength: { en: 'Intellectual Innovation', ar: 'الابتكار الفكري' }, detail: { en: 'You combine deep knowledge with fresh thinking to advance your domain.', ar: 'تجمع بين المعرفة العميقة والتفكير الجديد لتطوير مجالك.' } },
  { traits: ['creative', 'impact'], strength: { en: 'Purpose-Driven Creativity', ar: 'الإبداع الهادف' }, detail: { en: 'You channel your imagination toward solving real human problems.', ar: 'توجه خيالك نحو حل مشاكل إنسانية حقيقية.' } },
  { traits: ['cautious', 'methodical'], strength: { en: 'Risk Management', ar: 'إدارة المخاطر' }, detail: { en: 'Your thoroughness and care prevent costly mistakes others miss.', ar: 'شمولك وعنايتك يمنعان أخطاءً مكلفة يفوتها الآخرون.' } },
];

interface FieldMapping {
  traits: string[];
  field: { en: string; ar: string };
  reason: { en: string; ar: string };
  match: number;
}

const fieldMappings: FieldMapping[] = [
  { traits: ['analytical', 'strategic', 'achievement'], field: { en: 'Management Consulting & Business Strategy', ar: 'الاستشارات الإدارية واستراتيجية الأعمال' }, reason: { en: 'Your analytical thinking combined with strategic orientation makes you ideal for solving high-stakes business problems.', ar: 'تفكيرك التحليلي مع توجهك الاستراتيجي يجعلك مثالياً لحل مشاكل الأعمال عالية المخاطر.' }, match: 0 },
  { traits: ['analytical', 'knowledge', 'methodical'], field: { en: 'Scientific Research & Academia', ar: 'البحث العلمي والأكاديميا' }, reason: { en: 'Your precision, intellectual curiosity, and methodical approach align perfectly with scientific inquiry.', ar: 'دقتك وفضولك الفكري ومنهجيتك تتوافق تماماً مع البحث العلمي.' }, match: 0 },
  { traits: ['analytical', 'methodical', 'systematic'], field: { en: 'Software Engineering & Data Science', ar: 'هندسة البرمجيات وعلم البيانات' }, reason: { en: 'Your logical thinking and systematic approach are the foundation of excellent technical work.', ar: 'تفكيرك المنطقي ونهجك المنظم هما أساس العمل التقني الممتاز.' }, match: 0 },
  { traits: ['creative', 'innovative', 'pioneering'], field: { en: 'Design, Arts & Creative Direction', ar: 'التصميم والفنون والإخراج الإبداعي' }, reason: { en: 'Your creative mind thrives in environments where originality and vision drive the work.', ar: 'عقلك الإبداعي يزدهر في بيئات يقود فيها الأصالة والرؤية العمل.' }, match: 0 },
  { traits: ['creative', 'innovative', 'impact'], field: { en: 'Social Entrepreneurship & Innovation', ar: 'ريادة الأعمال الاجتماعية والابتكار' }, reason: { en: 'You combine creative thinking with a drive for meaningful impact — perfect for building solutions that matter.', ar: 'تجمع بين التفكير الإبداعي والسعي للتأثير الهادف — مثالي لبناء حلول ذات أهمية.' }, match: 0 },
  { traits: ['intuitive', 'collaborative', 'impact'], field: { en: 'Psychology, Counseling & Human Development', ar: 'علم النفس والإرشاد والتنمية البشرية' }, reason: { en: 'Your ability to understand people deeply and your drive to help them makes this a natural fit.', ar: 'قدرتك على فهم الناس بعمق ورغبتك في مساعدتهم تجعل هذا المجال مناسباً طبيعياً.' }, match: 0 },
  { traits: ['intuitive', 'impact', 'supporting'], field: { en: 'Healthcare & Social Work', ar: 'الرعاية الصحية والعمل الاجتماعي' }, reason: { en: 'Your empathy and desire to support others align with caring professions.', ar: 'تعاطفك ورغبتك في دعم الآخرين يتوافقان مع المهن الرعائية.' }, match: 0 },
  { traits: ['leading', 'achievement', 'strategic'], field: { en: 'Executive Leadership & Entrepreneurship', ar: 'القيادة التنفيذية وريادة الأعمال' }, reason: { en: 'Your leadership instinct, ambition, and strategic thinking are the DNA of successful founders and executives.', ar: 'غريزة القيادة لديك وطموحك وتفكيرك الاستراتيجي هي الحمض النووي للمؤسسين والمديرين التنفيذيين الناجحين.' }, match: 0 },
  { traits: ['systematic', 'stability', 'methodical'], field: { en: 'Finance, Accounting & Risk Management', ar: 'التمويل والمحاسبة وإدارة المخاطر' }, reason: { en: 'Your systematic thinking and desire for order make you excel in precision-demanding financial roles.', ar: 'تفكيرك المنهجي ورغبتك في النظام يجعلانك تتفوق في الأدوار المالية التي تتطلب الدقة.' }, match: 0 },
  { traits: ['systematic', 'practical', 'steady'], field: { en: 'Operations Management & Project Management', ar: 'إدارة العمليات وإدارة المشاريع' }, reason: { en: 'You build and maintain the systems that keep organizations running smoothly.', ar: 'تبني وتحافظ على الأنظمة التي تبقي المؤسسات تعمل بسلاسة.' }, match: 0 },
  { traits: ['creative', 'intuitive', 'independent'], field: { en: 'Writing, Content Creation & Journalism', ar: 'الكتابة وصناعة المحتوى والصحافة' }, reason: { en: 'Your creative instinct and independent thinking give you a distinctive voice.', ar: 'غريزتك الإبداعية وتفكيرك المستقل يمنحانك صوتاً مميزاً.' }, match: 0 },
  { traits: ['analytical', 'leading', 'pioneering'], field: { en: 'Technology Leadership & Product Management', ar: 'قيادة التكنولوجيا وإدارة المنتجات' }, reason: { en: 'You combine technical depth with leadership and a pioneer\'s mindset — ideal for shaping technology products.', ar: 'تجمع بين العمق التقني والقيادة وعقلية الرائد — مثالي لتشكيل المنتجات التكنولوجية.' }, match: 0 },
  { traits: ['collaborative', 'adaptive', 'impact'], field: { en: 'Education & Training', ar: 'التعليم والتدريب' }, reason: { en: 'Your collaborative spirit and adaptability make you an exceptional educator who meets learners where they are.', ar: 'روحك التعاونية وقدرتك على التكيف تجعلك مربياً استثنائياً يلتقي المتعلمين أينما كانوا.' }, match: 0 },
  { traits: ['practical', 'independent', 'achievement'], field: { en: 'Skilled Trades & Technical Specialization', ar: 'الحرف المهنية والتخصص التقني' }, reason: { en: 'Your hands-on approach and self-reliance make you thrive in specialized technical work.', ar: 'نهجك العملي واعتمادك على نفسك يجعلانك تزدهر في العمل التقني المتخصص.' }, match: 0 },
  { traits: ['strategic', 'innovative', 'adaptive'], field: { en: 'Marketing & Growth Strategy', ar: 'التسويق واستراتيجية النمو' }, reason: { en: 'Your strategic innovation and adaptability are perfect for navigating fast-changing markets.', ar: 'ابتكارك الاستراتيجي وقدرتك على التكيف مثاليان للتنقل في أسواق سريعة التغيير.' }, match: 0 },
  { traits: ['cautious', 'analytical', 'methodical'], field: { en: 'Law, Compliance & Quality Assurance', ar: 'القانون والامتثال وضمان الجودة' }, reason: { en: 'Your careful analysis and thoroughness are exactly what high-stakes compliance and legal work demand.', ar: 'تحليلك الدقيق وشمولك هما بالضبط ما يتطلبه العمل القانوني والامتثال عالي المخاطر.' }, match: 0 },
  { traits: ['intuitive', 'creative', 'pioneering'], field: { en: 'UX/UI Design & Human-Centered Design', ar: 'تصميم تجربة المستخدم والتصميم المتمحور حول الإنسان' }, reason: { en: 'Your intuition about people combined with creativity makes you naturally gifted at designing experiences.', ar: 'حدسك تجاه الناس مع إبداعك يجعلك موهوباً بطبيعتك في تصميم التجارب.' }, match: 0 },
  { traits: ['supporting', 'collaborative', 'stability'], field: { en: 'Human Resources & Organizational Development', ar: 'الموارد البشرية والتطوير المؤسسي' }, reason: { en: 'Your supportive nature and collaborative skills make you ideal for nurturing talent and culture.', ar: 'طبيعتك الداعمة ومهاراتك التعاونية تجعلك مثالياً لرعاية المواهب والثقافة.' }, match: 0 },
];

const mindsetTypes: Record<string, Record<string, { en: string; ar: string; desc: { en: string; ar: string } }>> = {
  analytical: {
    achievement: { en: 'The Architect', ar: 'المعماري', desc: { en: 'You build success through careful analysis and relentless pursuit of excellence. Your mind is a precision instrument that sees structure where others see chaos.', ar: 'تبني النجاح من خلال التحليل الدقيق والسعي الدؤوب نحو التميز. عقلك أداة دقيقة ترى النظام حيث يرى الآخرون الفوضى.' } },
    impact: { en: 'The Reformer', ar: 'المُصلح', desc: { en: 'You combine analytical rigor with a deep desire to improve systems and lives. You don\'t just identify problems — you engineer solutions.', ar: 'تجمع بين الصرامة التحليلية ورغبة عميقة في تحسين الأنظمة والحياة. لا تحدد المشاكل فحسب — بل تهندس الحلول.' } },
    knowledge: { en: 'The Scholar', ar: 'العالِم', desc: { en: 'Your intellectual depth is your defining feature. You pursue understanding with the discipline of a scientist and the curiosity of a philosopher.', ar: 'عمقك الفكري هو سمتك المميزة. تسعى للفهم بانضباط العالِم وفضول الفيلسوف.' } },
    stability: { en: 'The Engineer', ar: 'المهندس', desc: { en: 'You value reliability and precision equally. Your analytical mind builds systems that stand the test of time.', ar: 'تقدّر الموثوقية والدقة بالتساوي. عقلك التحليلي يبني أنظمة تصمد أمام اختبار الزمن.' } },
  },
  intuitive: {
    achievement: { en: 'The Navigator', ar: 'الملّاح', desc: { en: 'You sense the right path instinctively and pursue it with determination. Your intuition is your compass in the pursuit of success.', ar: 'تستشعر المسار الصحيح بشكل غريزي وتتبعه بعزيمة. حدسك هو بوصلتك في السعي نحو النجاح.' } },
    impact: { en: 'The Healer', ar: 'المُعالج', desc: { en: 'You understand human nature at a profound level and use that understanding to create genuine, lasting change.', ar: 'تفهم الطبيعة البشرية على مستوى عميق وتستخدم هذا الفهم لإحداث تغيير حقيقي ودائم.' } },
    knowledge: { en: 'The Sage', ar: 'الحكيم', desc: { en: 'You combine intuitive wisdom with intellectual depth. You see connections and truths that escape conventional thinking.', ar: 'تجمع بين الحكمة الحدسية والعمق الفكري. ترى روابط وحقائق تفلت من التفكير التقليدي.' } },
    stability: { en: 'The Guardian', ar: 'الحارس', desc: { en: 'You sense what people and situations need and provide steady, reliable presence. Your intuition serves your deep need for harmony.', ar: 'تستشعر ما يحتاجه الناس والمواقف وتوفر حضوراً ثابتاً وموثوقاً. حدسك يخدم حاجتك العميقة للانسجام.' } },
  },
  creative: {
    achievement: { en: 'The Innovator', ar: 'المبتكر', desc: { en: 'You don\'t just dream — you build. Your creativity is paired with a fierce drive to make your visions real and successful.', ar: 'أنت لا تحلم فقط — بل تبني. إبداعك مقترن بدافع شرس لجعل رؤاك حقيقية وناجحة.' } },
    impact: { en: 'The Changemaker', ar: 'صانع التغيير', desc: { en: 'Your creativity serves a higher purpose. You imagine better worlds and work to bring them into existence.', ar: 'إبداعك يخدم هدفاً أسمى. تتخيل عوالم أفضل وتعمل على تحقيقها.' } },
    knowledge: { en: 'The Polymath', ar: 'الموسوعي', desc: { en: 'You connect ideas across disciplines in ways others cannot. Your creative intellect sees the unity in diverse knowledge.', ar: 'تربط الأفكار عبر التخصصات بطرق لا يستطيعها الآخرون. عقلك الإبداعي يرى الوحدة في المعرفة المتنوعة.' } },
    stability: { en: 'The Artisan', ar: 'الحِرَفي', desc: { en: 'You channel your creativity into craft — producing work that is both original and refined, with patience and care.', ar: 'توجه إبداعك نحو الحرفة — تنتج عملاً أصيلاً ومصقولاً، بصبر وعناية.' } },
  },
  systematic: {
    achievement: { en: 'The Commander', ar: 'القائد', desc: { en: 'You build empires through order and ambition. Your systematic approach turns goals into step-by-step realities.', ar: 'تبني إمبراطوريات من خلال النظام والطموح. نهجك المنظم يحول الأهداف إلى واقع خطوة بخطوة.' } },
    impact: { en: 'The Organizer', ar: 'المنظّم', desc: { en: 'You create the structures and systems that enable meaningful change at scale. Your order serves a greater purpose.', ar: 'تبني الهياكل والأنظمة التي تمكّن التغيير الهادف على نطاق واسع. نظامك يخدم هدفاً أسمى.' } },
    knowledge: { en: 'The Cataloger', ar: 'المصنّف', desc: { en: 'You organize knowledge with precision and depth. Your systematic mind creates frameworks that make complex subjects accessible.', ar: 'تنظم المعرفة بدقة وعمق. عقلك المنهجي يبني أطراً تجعل المواضيع المعقدة سهلة الوصول.' } },
    stability: { en: 'The Steward', ar: 'الوكيل', desc: { en: 'You are the keeper of order and continuity. Your systematic nature ensures that what works today will work tomorrow.', ar: 'أنت حارس النظام والاستمرارية. طبيعتك المنهجية تضمن أن ما ينجح اليوم سينجح غداً.' } },
  },
};

function getDimensionTraits(dimension: Dimension): string[] {
  switch (dimension) {
    case 'thinking': return ['analytical', 'intuitive', 'creative', 'systematic'];
    case 'drive': return ['achievement', 'impact', 'knowledge', 'stability'];
    case 'social': return ['independent', 'collaborative', 'leading', 'supporting'];
    case 'problem': return ['strategic', 'practical', 'innovative', 'methodical'];
    case 'adaptability': return ['pioneering', 'adaptive', 'steady', 'cautious'];
  }
}

export function analyzeResults(answers: Record<number, string>): AnalysisResult {
  const dimensions: Dimension[] = ['thinking', 'drive', 'social', 'problem', 'adaptability'];
  const dimResults: DimensionResult[] = [];

  for (const dim of dimensions) {
    const traits = getDimensionTraits(dim);
    const scores: Record<string, number> = {};
    traits.forEach(t => scores[t] = 0);

    const dimQuestions = questions.filter(q => q.dimension === dim);
    for (const q of dimQuestions) {
      const answer = answers[q.id];
      if (answer && scores[answer] !== undefined) {
        scores[answer]++;
      }
    }

    let dominant = traits[0];
    let maxScore = 0;
    for (const t of traits) {
      if (scores[t] > maxScore) {
        maxScore = scores[t];
        dominant = t;
      }
    }

    dimResults.push({
      dimension: dim,
      dominant,
      scores,
      percentage: Math.round((maxScore / 5) * 100),
    });
  }

  const thinkingDom = dimResults.find(d => d.dimension === 'thinking')!.dominant;
  const driveDom = dimResults.find(d => d.dimension === 'drive')!.dominant;

  const profile = thinkingProfiles[thinkingDom];
  const thinkingProfile = {
    title: profile.title,
    description: profile.desc,
    icon: thinkingDom === 'analytical' ? '🔬' : thinkingDom === 'intuitive' ? '🌊' : thinkingDom === 'creative' ? '💡' : '⚙️',
  };

  const allDominants = dimResults.map(d => d.dominant);

  // Calculate strengths
  const strengths: Array<{ en: string; ar: string; detail: { en: string; ar: string } }> = [];
  for (const sm of strengthMappings) {
    const matchCount = sm.traits.filter(t => allDominants.includes(t)).length;
    if (matchCount >= 2) {
      strengths.push({ ...sm.strength, detail: sm.detail });
    }
  }

  // If fewer than 3 strengths, add generic ones based on dominant traits
  if (strengths.length < 3) {
    for (const dom of allDominants) {
      if (strengths.length >= 4) break;
      const label = traitLabels[dom];
      if (label && !strengths.find(s => s.en === label.en)) {
        const genericDetail = getGenericStrengthDetail(dom);
        strengths.push({ ...label, detail: genericDetail });
      }
    }
  }

  // Calculate field recommendations
  const fields = fieldMappings.map(fm => {
    const matchCount = fm.traits.filter(t => allDominants.includes(t)).length;
    return {
      name: fm.field,
      reason: fm.reason,
      match: Math.round((matchCount / fm.traits.length) * 100),
    };
  }).filter(f => f.match > 30).sort((a, b) => b.match - a.match).slice(0, 5);

  // Mindset type
  const mt = mindsetTypes[thinkingDom]?.[driveDom] || {
    en: 'The Independent Thinker',
    ar: 'المفكر المستقل',
    desc: {
      en: 'You have a unique combination of traits that defies simple categorization. This is a strength — you bring a perspective that is distinctly your own.',
      ar: 'لديك مزيج فريد من السمات يتحدى التصنيف البسيط. هذه نقطة قوة — تجلب منظوراً مميزاً خاصاً بك.',
    },
  };

  return {
    dimensions: dimResults,
    thinkingProfile,
    strengths: strengths.slice(0, 5),
    fields,
    mindsetType: { en: mt.en, ar: mt.ar },
    mindsetDesc: mt.desc,
  };
}

function getGenericStrengthDetail(trait: string): { en: string; ar: string } {
  const details: Record<string, { en: string; ar: string }> = {
    analytical: { en: 'You approach challenges with clarity, logic, and evidence-based reasoning.', ar: 'تتعامل مع التحديات بوضوح ومنطق وتفكير مبني على الأدلة.' },
    intuitive: { en: 'You perceive what others miss, guided by deep pattern recognition.', ar: 'تدرك ما يفوت الآخرين، مسترشداً بتعرف عميق على الأنماط.' },
    creative: { en: 'You generate original ideas and see possibilities where others see walls.', ar: 'تولّد أفكاراً أصيلة وترى إمكانيات حيث يرى الآخرون جدراناً.' },
    systematic: { en: 'You bring order and reliability to everything you touch.', ar: 'تجلب النظام والموثوقية لكل ما تلمسه.' },
    achievement: { en: 'Your drive for excellence pushes you to deliver outstanding results.', ar: 'دافعك نحو التميز يدفعك لتقديم نتائج استثنائية.' },
    impact: { en: 'You channel your energy toward creating meaningful, lasting change.', ar: 'توجه طاقتك نحو إحداث تغيير هادف ودائم.' },
    knowledge: { en: 'Your intellectual depth and curiosity set you apart.', ar: 'عمقك الفكري وفضولك يميزانك.' },
    stability: { en: 'You provide grounding and consistency that others rely on.', ar: 'توفر الثبات والاستمرارية التي يعتمد عليها الآخرون.' },
    independent: { en: 'You are self-directed and produce your best work with autonomy.', ar: 'أنت ذاتي التوجيه وتنتج أفضل عمل لك بالاستقلالية.' },
    collaborative: { en: 'You multiply team effectiveness through genuine partnership.', ar: 'تضاعف فعالية الفريق من خلال الشراكة الحقيقية.' },
    leading: { en: 'You naturally guide others and create momentum.', ar: 'توجه الآخرين بشكل طبيعي وتخلق زخماً.' },
    supporting: { en: 'You strengthen every team you join through quiet, essential contributions.', ar: 'تقوي كل فريق تنضم إليه من خلال مساهمات هادئة وأساسية.' },
    strategic: { en: 'You think long-term and position yourself for optimal outcomes.', ar: 'تفكر على المدى الطويل وتضع نفسك للنتائج المثلى.' },
    practical: { en: 'You turn ideas into action with efficiency and common sense.', ar: 'تحول الأفكار إلى فعل بكفاءة وحس سليم.' },
    innovative: { en: 'You push boundaries and find new approaches to old problems.', ar: 'تتخطى الحدود وتجد مقاربات جديدة لمشاكل قديمة.' },
    methodical: { en: 'Your thoroughness and attention to detail ensure quality in everything.', ar: 'شمولك واهتمامك بالتفاصيل يضمنان الجودة في كل شيء.' },
    pioneering: { en: 'You embrace the unknown and thrive as a first mover.', ar: 'تعانق المجهول وتزدهر كأول من يتحرك.' },
    adaptive: { en: 'You respond to change with grace and maintain effectiveness in any environment.', ar: 'تستجيب للتغيير بمرونة وتحافظ على الفعالية في أي بيئة.' },
    steady: { en: 'Your consistency and reliability make you a cornerstone of any endeavor.', ar: 'ثباتك وموثوقيتك يجعلانك حجر زاوية لأي مسعى.' },
    cautious: { en: 'Your careful approach prevents mistakes and ensures sustainable progress.', ar: 'نهجك الحذر يمنع الأخطاء ويضمن تقدماً مستداماً.' },
  };
  return details[trait] || { en: 'A distinctive quality that sets you apart.', ar: 'صفة مميزة تميزك عن الآخرين.' };
}

export const ui = {
  landing: {
    title: { en: 'Know Yourself', ar: 'اعرف نفسك' },
    subtitle: { en: 'Without the Nonsense', ar: 'بدون كلام فارغ' },
    desc: { en: 'A serious personality and mindset analysis. No childish quizzes. Scientific, respectful, and insightful.', ar: 'تحليل جاد للشخصية والعقلية. بدون اختبارات سخيفة. علمي، محترم، وعميق.' },
    features: [
      { icon: '🧠', en: 'How You Think', ar: 'كيف تفكر', desc: { en: 'Understand your cognitive patterns and mental frameworks', ar: 'افهم أنماطك المعرفية وأطرك الذهنية' } },
      { icon: '💪', en: 'Your Real Strengths', ar: 'نقاط قوتك الحقيقية', desc: { en: 'Discover what you genuinely excel at — not flattery', ar: 'اكتشف ما تتفوق فيه حقاً — وليس مجاملات' } },
      { icon: '🎯', en: 'Fields That Suit You', ar: 'المجالات التي تناسبك', desc: { en: 'Data-driven career and field recommendations', ar: 'توصيات مهنية ومجالات مبنية على بياناتك' } },
    ],
    start: { en: 'Begin Analysis', ar: 'ابدأ التحليل' },
    time: { en: '25 thoughtful questions · ~8 minutes', ar: '٢٥ سؤالاً مدروساً · ~٨ دقائق' },
    note: { en: 'Your responses are processed locally. Nothing is stored or shared.', ar: 'تُعالج إجاباتك محلياً. لا يُخزّن أو يُشارك أي شيء.' },
  },
  quiz: {
    question: { en: 'Question', ar: 'سؤال' },
    of: { en: 'of', ar: 'من' },
    next: { en: 'Next', ar: 'التالي' },
    previous: { en: 'Previous', ar: 'السابق' },
    finish: { en: 'View My Analysis', ar: 'اعرض تحليلي' },
    selectOne: { en: 'Select the option that resonates most with you', ar: 'اختر الخيار الأقرب إليك' },
    progress: { en: 'Progress', ar: 'التقدم' },
    section: { en: 'Section', ar: 'القسم' },
  },
  results: {
    title: { en: 'Your Analysis', ar: 'تحليلك' },
    mindset: { en: 'Your Mindset Archetype', ar: 'نموذج عقليتك' },
    thinking: { en: 'How You Think', ar: 'كيف تفكر' },
    strengths: { en: 'Your Core Strengths', ar: 'نقاط قوتك الأساسية' },
    fields: { en: 'Fields That Suit You', ar: 'المجالات التي تناسبك' },
    dimensions: { en: 'Dimension Breakdown', ar: 'تفصيل الأبعاد' },
    match: { en: 'Match', ar: 'تطابق' },
    restart: { en: 'Retake Analysis', ar: 'أعد التحليل' },
    dominant: { en: 'Dominant', ar: 'السائد' },
    disclaimer: { en: 'This analysis is based on self-reported preferences and is intended for self-reflection, not clinical diagnosis. Use it as one data point in understanding yourself.', ar: 'هذا التحليل مبني على تفضيلات ذاتية ومخصص للتأمل الذاتي وليس للتشخيص السريري. استخدمه كنقطة بيانات واحدة في فهم نفسك.' },
  },
  nav: {
    lang: { en: 'العربية', ar: 'English' },
  },
};
