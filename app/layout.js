import Header from '@/components/Header';
import './globals.css'
import { Inter, Noto_Sans_KR, Roboto } from 'next/font/google'
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })
const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const roboto = Roboto({
  subsets: ["latin"], // preload에 사용할 subsets입니다.
  weight: ["100", "400", "700"],
  variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

export const cls = (...classnames ) => {
  return classnames.join(" ");
};

export const metadata = {
  title: '1일차 연습',
  description: '웹페이지 실습',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cls(notoSansKr.className, roboto.variable)} > 
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
