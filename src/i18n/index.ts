import en from './en.json';
import id from './id.json';

export const translate = (key: string, language: string): string => {
  let langData: { [key: string]: string } = {};

  if(language === 'English') {
    langData = en;
  }else if(language === 'Indonesia') {
    langData = id;
  }

  return langData[key];
}