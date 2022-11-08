import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='topmenu'>
                    <div className='logo'> <h1> <a href='/'><img src="./img/Layer 1.png" alt="logo" /></a></h1></div>
                    <div className='nav'>
                        <ul className='mainmenu'>
                            <li>
                                <a href='/'>새소식</a>
                                <ul className='submenu'>
                                    <li><a href='/'>공지사항</a></li>
                                    <li><a href='/'>업데이트</a></li>
                                    <li><a href='/'>이벤트</a></li>
                                    <li><a href='/'>리샤의 편지</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='/'>게임정보</a>
                                <ul className='submenu'>
                                    <li><a href='/'>전투정보실</a></li>
                                    <li><a href='/'>세계관</a></li>
                                    <li><a href='/'>클래스</a></li>
                                    <li><a href='/'>콘텐츠</a></li>
                                    <li><a href='/'>월드맵</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='/'>가이드</a>
                                <ul className='submenu'>
                                    <li><a href='/'>게임 가이드</a></li>
                                    <li><a href='/'>아이템 사전</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='/'>커뮤니티</a>
                                <ul className='submenu'>
                                    <li><a href='/'>자유</a></li>
                                    <li><a href='/'>직업</a></li>
                                    <li><a href='/'>공략</a></li>
                                    <li><a href='/'>Q&A</a></li>
                                    <li><a href='/'>갤러리</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='/'>미디어</a>
                                <ul className='submenu'>
                                    <li><a href='/'>로아 상영관</a></li>
                                    <li><a href='/'>공모전</a></li>
                                    <li><a href='/'>OST</a></li>
                                    <li><a href='/'>Artwork</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='/'>거래소</a>
                                <ul className='submenu'>
                                    <li><a href='/'>거래소</a></li>
                                    <li><a href='/'>경매장</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='/'>웹 샵</a>
                                <ul className='submenu'>
                                    <li><a href='/'>SHOP</a></li>
                                    <li><a href='/'>캐시</a></li>
                                    <li><a href='/'>쿠폰</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='/'>고객센터</a>
                                <ul className='submenu'>
                                    <li><a href='/'>FAQ</a></li>
                                    <li><a href='/'>신고센터</a></li>
                                    <li><a href='/'>보안서비스</a></li>
                                    <li><a href='/'>클라이언트</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='/'>테스터</a>
                                <ul className='submenu'>
                                    <li><a href='/'>공지사항</a></li>
                                    <li><a href='/'>버그건의</a></li>
                                    <li><a href='/'>자유</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    <div className='gamestart'>
                        <button>GAME START</button>
                        {/* 눌렀을때 화면중앙 로그인후 이용해주세요 디테일 나중에 추가 */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header