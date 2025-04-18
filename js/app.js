// 영화 데이터 - 실제 프로젝트에서는 API를 사용하지만 예시로 샘플 데이터 제공
const moviesData = [
    {
        id: 1,
        title: "인셉션",
        year: 2010,
        genre: "sci-fi",
        director: "크리스토퍼 놀란",
        actors: ["레오나르도 디카프리오", "조셉 고든-레빗", "엘리엇 페이지"],
        plot: "꿈 속의 꿈을 설계하는 특수 보안 요원이 위험한 임무를 맡게 됩니다.",
        poster: "https://source.unsplash.com/random/300x450/?inception",
        rating: 8.8,
        ratings: [
            { source: "IMDb", value: "8.8/10" },
            { source: "Rotten Tomatoes", value: "87%" },
            { source: "Metacritic", value: "74/100" }
        ]
    },
    {
        id: 2,
        title: "기생충",
        year: 2019,
        genre: "drama",
        director: "봉준호",
        actors: ["송강호", "이선균", "조여정", "최우식", "박소담"],
        plot: "전원 백수인 기택네 장남 기우는 친구의 소개로 박사장네 고액 과외 선생이 됩니다. 기우가 박사장네 저택에 발을 들이면서 두 가족의 만남은 시작되고, 이는 걷잡을 수 없는 사건으로 이어집니다.",
        poster: "https://source.unsplash.com/random/300x450/?parasite",
        rating: 8.6,
        ratings: [
            { source: "IMDb", value: "8.6/10" },
            { source: "Rotten Tomatoes", value: "98%" },
            { source: "Metacritic", value: "96/100" }
        ]
    },
    {
        id: 3,
        title: "어벤져스: 엔드게임",
        year: 2019,
        genre: "action",
        director: "앤서니 루소, 조 루소",
        actors: ["로버트 다우니 주니어", "크리스 에반스", "마크 러팔로", "크리스 헴스워스"],
        plot: "인피니티 워 이후 절반만 살아남은 지구, 마지막 희망이 된 어벤져스는 사라진 동료들을 되살리기 위해 목숨을 건 작전을 시작합니다.",
        poster: "https://source.unsplash.com/random/300x450/?avengers",
        rating: 8.4,
        ratings: [
            { source: "IMDb", value: "8.4/10" },
            { source: "Rotten Tomatoes", value: "94%" },
            { source: "Metacritic", value: "78/100" }
        ]
    },
    {
        id: 4,
        title: "다크 나이트",
        year: 2008,
        genre: "action",
        director: "크리스토퍼 놀란",
        actors: ["크리스찬 베일", "히스 레저", "아론 에크하트", "매기 길렌홀"],
        plot: "배트맨이 도시의 범죄와 부패에 맞서 싸우는 동안 조커라는 새로운 적이 등장해 혼란을 초래합니다.",
        poster: "https://source.unsplash.com/random/300x450/?dark-knight",
        rating: 9.0,
        ratings: [
            { source: "IMDb", value: "9.0/10" },
            { source: "Rotten Tomatoes", value: "94%" },
            { source: "Metacritic", value: "84/100" }
        ]
    },
    {
        id: 5,
        title: "라라랜드",
        year: 2016,
        genre: "drama",
        director: "데이미언 셔젤",
        actors: ["라이언 고슬링", "엠마 스톤", "존 레전드"],
        plot: "재즈 피아니스트와 배우 지망생이 꿈을 좇아 분투하며 서로 사랑에 빠집니다.",
        poster: "https://source.unsplash.com/random/300x450/?la-la-land",
        rating: 8.0,
        ratings: [
            { source: "IMDb", value: "8.0/10" },
            { source: "Rotten Tomatoes", value: "91%" },
            { source: "Metacritic", value: "93/100" }
        ]
    },
    {
        id: 6,
        title: "조커",
        year: 2019,
        genre: "drama",
        director: "토드 필립스",
        actors: ["호아킨 피닉스", "로버트 드 니로", "자지 비츠"],
        plot: "정신적으로 불안정한 실패한 코미디언 아서 플렉이 점차 광기에 빠져들면서 악명 높은 범죄자 조커로 변모하는 과정을 그립니다.",
        poster: "https://source.unsplash.com/random/300x450/?joker",
        rating: 8.4,
        ratings: [
            { source: "IMDb", value: "8.4/10" },
            { source: "Rotten Tomatoes", value: "68%" },
            { source: "Metacritic", value: "59/100" }
        ]
    },
    {
        id: 7,
        title: "미나리",
        year: 2020,
        genre: "drama",
        director: "리 아이삭 정",
        actors: ["스티븐 연", "한예리", "윤여정", "앨런 김"],
        plot: "1980년대 미국 아칸소주로 이민 온 한국 가족이 새로운 삶을 꿈꾸며 농장을 일구는 이야기를 그립니다.",
        poster: "https://source.unsplash.com/random/300x450/?minari",
        rating: 7.5,
        ratings: [
            { source: "IMDb", value: "7.5/10" },
            { source: "Rotten Tomatoes", value: "98%" },
            { source: "Metacritic", value: "89/100" }
        ]
    },
    {
        id: 8,
        title: "겨울왕국",
        year: 2013,
        genre: "animation",
        director: "크리스 벅, 제니퍼 리",
        actors: ["크리스틴 벨", "이디나 멘젤", "조나단 그로프"],
        plot: "얼음 왕국이 된 아렌델레를 구하기 위해 안나가 언니 엘사를 찾아 위험한 여정을 떠납니다.",
        poster: "https://source.unsplash.com/random/300x450/?frozen",
        rating: 7.4,
        ratings: [
            { source: "IMDb", value: "7.4/10" },
            { source: "Rotten Tomatoes", value: "90%" },
            { source: "Metacritic", value: "75/100" }
        ]
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const movieGrid = document.getElementById('movie-grid');
    const featuredSlider = document.querySelector('.featured-slider');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const genreFilter = document.getElementById('genre-filter');
    const yearFilter = document.getElementById('year-filter');
    const loadMoreButton = document.getElementById('load-more');
    const modal = document.getElementById('movie-modal');
    const modalDetails = document.getElementById('modal-details');
    const closeModal = document.querySelector('.close');
    const header = document.querySelector('header');
    const ctaButton = document.querySelector('.cta-button');
    const movieCards = document.querySelectorAll('.movie-card');
    const featuredCards = document.querySelectorAll('.featured-card');

    // 스크롤 시 헤더 효과
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // CTA 버튼 클릭 이벤트
    ctaButton.addEventListener('click', () => {
        const moviesSection = document.getElementById('movies');
        moviesSection.scrollIntoView({ behavior: 'smooth' });
    });

    // 영화 카드 클릭 이벤트
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            const movieId = card.getAttribute('data-id');
            openMovieDetails(movieId);
        });
    });

    // 추천 영화 카드 클릭 이벤트
    featuredCards.forEach(card => {
        card.addEventListener('click', () => {
            const movieId = card.getAttribute('data-id');
            openMovieDetails(movieId);
        });
    });

    // 영화 모달 상세정보 표시
    function openMovieDetails(movieId) {
        // 여기에서는 간단히 샘플 데이터로 모달을 채웁니다
        // 실제로는 moviesData 배열에서 해당 ID에 맞는 영화를 찾아 데이터를 채워야 합니다
        const sampleMovie = {
            id: movieId,
            title: '샘플 영화 제목',
            year: 2023,
            genre: '액션',
            director: '샘플 감독',
            actors: ['배우 1', '배우 2', '배우 3'],
            plot: '이 영화는 샘플 영화입니다. 상세 내용은 실제 API나 데이터에서 가져와야 합니다.',
            poster: 'https://source.unsplash.com/random/300x450/?movie',
            rating: 8.5,
            ratings: [
                { source: 'IMDb', value: '8.5/10' },
                { source: 'Rotten Tomatoes', value: '90%' },
                { source: 'Metacritic', value: '85/100' }
            ]
        };
        
        // 모달에 데이터를 기반으로 HTML을 생성합니다
        modalDetails.innerHTML = `
            <div class="modal-movie-details">
                <div class="modal-poster">
                    <img src="${sampleMovie.poster}" alt="${sampleMovie.title}">
                </div>
                <div class="modal-info">
                    <h2 class="modal-title">${sampleMovie.title} (${sampleMovie.year})</h2>
                    <div class="modal-meta">
                        <span class="modal-genre">${sampleMovie.genre}</span>
                        <span class="modal-director">감독: ${sampleMovie.director}</span>
                        <span class="modal-rating">평점: ${sampleMovie.rating}/10</span>
                    </div>
                    <p class="modal-plot">${sampleMovie.plot}</p>
                    <div class="modal-cast">
                        <h4>출연진</h4>
                        <div class="cast-list">
                            ${sampleMovie.actors.map(actor => `<span class="cast-member">${actor}</span>`).join('')}
                        </div>
                    </div>
                    <div class="modal-ratings">
                        <h4>평점</h4>
                        <div class="ratings-list">
                            ${sampleMovie.ratings.map(rating => `
                                <div class="rating-source">
                                    <span>${rating.source}: ${rating.value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 모달을 표시합니다
        modal.style.display = 'block';
        
        // 스크롤 방지
        document.body.style.overflow = 'hidden';
    }

    // 모달 닫기
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // 검색 기능
    searchButton.addEventListener('click', () => {
        performSearch();
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 검색 수행
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') return;
        
        // 여기서는 간단히 알림으로 표시
        alert(`"${searchTerm}" 검색 결과를 표시합니다.`);
        
        // 실제로는 영화 데이터에서 필터링하고 결과를 표시해야 합니다
    }

    // 필터 변경 시 이벤트
    genreFilter.addEventListener('change', applyFilters);
    yearFilter.addEventListener('change', applyFilters);

    // 필터 적용
    function applyFilters() {
        const selectedGenre = genreFilter.value;
        const selectedYear = yearFilter.value;
        
        // 여기서는 간단히 알림으로 표시
        if (selectedGenre || selectedYear) {
            let filterMessage = '필터 적용: ';
            if (selectedGenre) filterMessage += `장르: ${selectedGenre} `;
            if (selectedYear) filterMessage += `연도: ${selectedYear}`;
            alert(filterMessage);
        }
        
        // 실제로는 영화 카드를 필터링하고 결과를 표시해야 합니다
    }

    // 더 보기 버튼
    loadMoreButton.addEventListener('click', () => {
        // 여기서는 간단히 알림으로 표시
        alert('더 많은 영화를 로드합니다.');
        
        // 실제로는 추가 영화 데이터를 가져와서 표시해야 합니다
    });

    // 애니메이션 효과 - 화면에 나타날 때 요소에 애니메이션 추가
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature, .movie-card, h2, .hero-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // 초기 스타일 설정
    const initAnimations = () => {
        const elements = document.querySelectorAll('.feature, .movie-card:not(:nth-child(-n+4)), h2:not(:first-of-type), .hero-content');
        
        elements.forEach(element => {
            if (!element.classList.contains('hero-content')) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });
    };

    // 초기화 및 이벤트 리스너 설정
    initAnimations();
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 초기 로드 시 이미 화면에 있는 요소들을 위해 한 번 호출

    // 스클롤 인디케이터 표시/숨기기
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '0.8';
        }
    });
});
