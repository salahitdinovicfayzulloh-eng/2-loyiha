export interface RouterStep {
  title: string;
  description: string;
}

export interface RouterGuide {
  id: string;
  brand: string;
  model: string;
  steps: RouterStep[];
}

export const ROUTER_GUIDES: RouterGuide[] = [
  {
    id: 'zte',
    brand: 'ZTE',
    model: 'F660 / F670L',
    steps: [
      {
        title: 'Routerni ulang',
        description: "Optik kabelni WAN portiga, kompyuterni LAN portiga ulang va routerni elektr manbaiga yoqing.",
      },
      {
        title: 'Boshqaruv paneliga kiring',
        description: "Brauzerda 192.168.1.1 manzilini oching. Login va parol odatda routerning orqa qopqog'ida yozilgan.",
      },
      {
        title: 'PPPoE sozlamalarini kiriting',
        description: "Network bo'limida WAN ulanishini tanlang va shartnomada ko'rsatilgan login hamda parolni kiriting.",
      },
      {
        title: 'Wi-Fi nomi va parolini o\'rnating',
        description: "WLAN bo'limida tarmoq nomi va kamida 8 belgidan iborat yangi parol kiriting.",
      },
      {
        title: 'Saqlang va tekshiring',
        description: "Sozlamalarni saqlang, qurilmani Wi-Fi ga ulang va internet ochilishini tekshiring.",
      },
    ],
  },
  {
    id: 'huawei',
    brand: 'Huawei',
    model: 'HG8245H / EchoLife',
    steps: [
      {
        title: 'Ulanishni tekshiring',
        description: "PON indikatori yonib turishi kerak. Yashil yoki ko'k chiroq uzluksiz bo'lsa, optika ishlayapti.",
      },
      {
        title: 'Boshqaruv paneliga kiring',
        description: "Brauzerda 192.168.100.1 manzilini oching va routerdagi standart login ma'lumotlari bilan kiring.",
      },
      {
        title: 'WAN ulanishini yarating',
        description: "WAN bo'limida yangi ulanish qo'shing, turini PPPoE qilib tanlang va berilgan login/parolni kiriting.",
      },
      {
        title: 'Wi-Fi ni sozlang',
        description: "WLAN bo'limida tarmoq nomi va parolni kiriting, shifrlash turi sifatida WPA2-PSK ni tanlang.",
      },
      {
        title: 'Qayta yoqing',
        description: "Routerni bir daqiqaga o'chirib yoqing. Barcha qurilmalar avtomatik ulanadi.",
      },
    ],
  },
  {
    id: 'tplink',
    brand: 'TP-Link',
    model: 'Archer C6 / Archer AX',
    steps: [
      {
        title: 'Routerga ulaning',
        description: "Kompyuter yoki telefonni router Wi-Fi tarmog'iga ulang. Standart nom routerning etiketkasida ko'rsatilgan.",
      },
      {
        title: 'Tezkor sozlashni oching',
        description: "Brauzerda tplinkwifi.net manzilini oching va Tezkor sozlash (Quick Setup) bo'limini tanlang.",
      },
      {
        title: 'Internet turini tanlang',
        description: "Internet turi sifatida PPPoE ni tanlang va Uztelecom shartnomasidagi login hamda parolni kiriting.",
      },
      {
        title: 'Yangi Wi-Fi parolini yarating',
        description: "Tarmoq nomi va kuchli parol kiriting. Parol kamida 8 belgidan iborat bo'lsin.",
      },
      {
        title: 'Ulanishni tasdiqlang',
        description: "Saqlashdan so'ng internet holati 'Ulangan' ko'rsatishini tekshiring.",
      },
    ],
  },
];
