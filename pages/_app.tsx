import { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@src/styles/globalStyle';

//서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트
//페이지에 적용할 공통 레이아웃의 역할
// pageProps는 getInitialProps, getStaticProps, getServerSideProps 중 하나를 통해 페칭한 초기 속성값
const MyApp = ({ Component, pageProps }: AppProps) => {
    // 이렇게 해야 서로 다른 사용자와 요청 사이에 데이터가 공유되지 않는다.
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <GlobalStyle />
                <Component {...pageProps} />
            </RecoilRoot>
        </QueryClientProvider>
    );
};

export default MyApp;
