<h1>YouTube 비디오 뷰어 및 검색 앱</h1>

![이미지 대체 텍스트](https://raw.githubusercontent.com/jhwangwoo/site2023-react-youtubesite/main/src/assets/image/youtube_img.png)

[링크](https://jhwyoutube-site.netlify.app/)

<p>
    이 웹 애플리케이션은 YouTube 비디오를 검색하고 시청할 수 있는 간단한 뷰어 및 검색 기능을 제공합니다.
</p>

<h2>사용한 메서드</h2>
<ul>
    <li>useState: MainConts와 VideoConts 컴포넌트에서 상태 관리를 위해 사용되었습니다. 비디오 정보와 상세 정보를 상태로 관리합니다.</li>
    <li>useEffect: 컴포넌트의 라이프사이클에 따라 데이터를 가져오거나 처리하는 데 사용되었습니다. MainConts와 SearchConts 컴포넌트에서 비디오정보를 가져오고, VideoConts 컴포넌트에서 특정 비디오의 상세 정보를 가져옵니다.</li>
    <li>useParams: React Router를 사용하여 URL 파라미터 값을 얻기 위해 사용되었습니다. SearchConts와 VideoConts 컴포넌트에서 URL로부터 검색어 및비디오 ID를 추출합니다.</li>
    <li>fetch: 네트워크 요청을 보내기 위해 사용되었습니다. YouTube Data API에서 비디오 정보를 가져오는 데 사용되었습니다.</li>
</ul>

<h2>기능 설명</h2>
<ol>
    <li>메인 화면: MainConts 컴포넌트가 담당합니다. 메인 화면에는 비디오 카테고리가 표시되며, 사용자가 카테고리를 선택하면 해당 카테고리에 속한비디오들이 불러와져서 화면에 보여집니다.</li>
    <li>비디오 검색: SearchBar 컴포넌트를 사용하여 비디오를 검색할 수 있습니다. 사용자가 검색어를 입력하고 엔터 키를 누르면 해당 검색어로 관련된비디오들이 검색되어 표시됩니다.</li>
    <li>비디오 시청: VideoConts 컴포넌트가 담당합니다. 사용자가 특정 비디오 카드를 클릭하면 해당 비디오의 상세 정보와 재생 영상이 표시되어 비디오를시청할 수 있습니다.</li>
</ol>

 <p>
    이 애플리케이션은 React와 React Router를 기반으로 구축되었습니다. YouTube Data API를 사용하여 비디오 정보를 가져오며, React Icons 라이브러리를사용하여 아이콘을 표시합니다.
 </p>