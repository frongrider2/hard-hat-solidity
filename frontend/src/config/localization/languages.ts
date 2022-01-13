export interface Language {
  locale: string;
  language: string;
  code: string;
}
export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' };
export const TH: Language = { locale: 'th-TH', language: 'Thailand', code: 'th' };
export const ZHCN: Language = { locale: 'zh-CN', language: '简体中文', code: 'zh-cn' };

export const languages = {
  'en-US': EN,
  // 'th-TH': TH,
  // 'zh-CN': ZHCN,
};

export const languageList = Object.values(languages);
