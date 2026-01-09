
import { Dua, Category } from './types';

export const DUAS: Dua[] = [
  {
    id: '1',
    title: 'Before Sleeping',
    category: Category.DAILY,
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: 'Bismika Allahumma amootu wa-ahya',
    translation: 'In Your name, O Allah, I die and I live.',
    reference: 'Sahih al-Bukhari 6324'
  },
  {
    id: '2',
    title: 'Upon Waking Up',
    category: Category.DAILY,
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: 'Alhamdu lillahil-ladhi ahyana ba\'da ma amatana wa-ilayhin-nushoor',
    translation: 'Praise is to Allah Who gives us life after He has caused us to die and to Him is the return.',
    reference: 'Sahih al-Bukhari 6312'
  },
  {
    id: '3',
    title: 'For Protection from Evil',
    category: Category.PROTECTION,
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: 'A\'udhu bi-kalimatil-lahit-tammati min sharri ma khalaq',
    translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
    reference: 'Sahih Muslim 2708'
  },
  {
    id: '4',
    title: 'Morning Supplication',
    category: Category.MORNING_EVENING,
    arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
    transliteration: 'Allahumma bika asbahna, wa-bika amsayna, wa-bika nahya, wa-bika namootu wa-ilayhin-nushoor',
    translation: 'O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the Final Return.',
    reference: 'At-Tirmidhi 3391'
  },
  {
    id: '5',
    title: 'For Anxiety and Sorrow',
    category: Category.SICKNESS,
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
    transliteration: 'Allahumma inni a\'udhu bika minal-hammi wal-hazani, wal-\'ajzi wal-kasali, wal-bukhli wal-jubni, wa-dala\'id-dayni wa-ghalabatir-rijal',
    translation: 'O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness, miserliness and cowardice, the burden of debts and from being overpowered by men.',
    reference: 'Sahih al-Bukhari 2893'
  },
  {
    id: '6',
    title: 'Seeking Forgiveness (Sayyid al-Istighfar)',
    category: Category.FORGIVENESS,
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: 'Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa-ana \'abduka, wa-ana \'ala \'ahdika wa-wa\'dika mastata\'tu, a\'udhu bika min sharri ma sana\'tu, aboo\'u laka bi-ni\'matika \'alayya, wa-aboo\'u laka bi-dhambi faghfir li fa-innahu la yaghfirudh-dhunooba illa Anta',
    translation: 'O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant, and I abide by Your covenant and promise as best as I can. I seek refuge in You from the evil I have committed. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for none can forgive sins except You.',
    reference: 'Sahih al-Bukhari 6306'
  },
  {
    id: '7',
    title: 'For Seeking Beneficial Knowledge',
    category: Category.DAILY,
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلاً',
    transliteration: 'Allahumma inni as\'aluka \'ilman nafi\'an, wa-rizqan tayyiban, wa-\'amalan mutaqabbalan',
    translation: 'O Allah, I ask You for knowledge that is of benefit, a good provision, and deeds that will be accepted.',
    reference: 'Ibn Majah 925'
  },
  {
    id: '8',
    title: 'Before Entering the Toilet',
    category: Category.DAILY,
    arabic: 'بِسْمِ اللَّهِ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
    transliteration: 'Bismillahi. Allahumma inni a\'udhu bika minal-khubuthi wal-khaba\'ith',
    translation: 'In the name of Allah. O Allah, I seek refuge in You from the male and female devils.',
    reference: 'Sahih al-Bukhari 142'
  },
  {
    id: '9',
    title: 'After Leaving the Toilet',
    category: Category.DAILY,
    arabic: 'غُفْرَانَكَ',
    transliteration: 'Ghufranaka',
    translation: 'I ask You for forgiveness.',
    reference: 'At-Tirmidhi 7'
  },
  {
    id: '10',
    title: 'When Entering the Mosque',
    category: Category.PRAYER,
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: 'Allahummaftah li abwaba rahmatik',
    translation: 'O Allah, open for me the gates of Your mercy.',
    reference: 'Sahih Muslim 713'
  },
  {
    id: '11',
    title: 'For Patience and Steadfastness',
    category: Category.SICKNESS,
    arabic: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
    transliteration: 'Rabbana afrigh \'alayna sabran wa thabbit aqdamana wansurna \'alal qawmil kafirin',
    translation: 'Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.',
    reference: 'Surah Al-Baqarah 2:250'
  },
  {
    id: '12',
    title: 'In Gratitude to Allah',
    category: Category.GRATITUDE,
    arabic: 'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ',
    transliteration: 'Rabbi awzi\'ni an ashkura ni\'matakal-lati an\'amta \'alayya wa-\'ala walidayya',
    translation: 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents.',
    reference: 'Surah An-Naml 27:19'
  }
];
