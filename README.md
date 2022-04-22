### ☺︎ Wanted_pre_onboarding Front-end Course

안녕하세요, 프리온보딩 프론트엔드 4차 코스에 참가하게된 이치호 입니다.

<hr>

### Toggle

![TOGGLE](https://user-images.githubusercontent.com/87627359/164741276-946d7262-1b34-4e2b-aa57-759cbde672fb.gif)

✔️ **기능 구현**

크게 어려운 점은 없었습니다. Styled-Components가 아닌, CSS-Module을 이용해 스타일을 줬습니다. Toggle 기능은 On/Off, 기본/상세 등 두 가지 기능에 한해서 작동하기 때문에, 별도의 props관리나 확장성은 신경쓰지 않아도 되기 때문에 별도로 라이브러리를 필요로 하지 않는다고 느꼈습니다.

'기본', '상세'는 각각 boolean값을 부여해, className을 조건적으로 주어 해당 아이템의 boolean값이 state값이 될 때 **font-weight: bold** 속성으로 약간의 UX를 부여했습니다.

📌 **어려웠던 점**

사용자가 어떤 속성에 접근해있는지 알리는 토글 버튼의 className을 조건적으로 할당해 css속성을 조작해 위치를 바꿔주려고 했으나, 조건적으로 부여하게 되면 애니메이션 추가에 어려움이 있어 input의 동작으로 토글 방식이 변경되게 했습니다.

<hr>

### Tab

![TAB](https://user-images.githubusercontent.com/87627359/164741741-56a6cc67-fc0d-4f25-a91c-a678d5022520.gif)

✔️ **기능 구현**

Styled-components를 이용해 HTML 태그들을 관리했습니다. CSS속성에 props를 넘겨주어 관리하면 **더욱 더 확장성있게 컴포넌트를 제어**할 수 있어 라이브러리를 사용했습니다.

Toggle.js 컴포넌트와 마찬가지로, 각각의 메뉴가 가지고있는 index를 state값과 비교하며 현재 사용자가 누른 메뉴는 **font-weight:bold** 속성을 부여했습니다.

메뉴를 담고있는 Container 태그에 **border-bottom: 3px solid #CCC와 position:relative** 속성을 부여하고, border의 빈 공간을 채워줄 Colorbar 태그를 만들어 **position:absolute** 속성으로 서로 한 몸처럼 움직일 수 있게 제어했습니다.

메뉴 클릭시 움직이는 Colorbar에 width는 메뉴.length로 분할해 메뉴가 추가돼도 문제 없게 설계했고,**transform도 마찬가지로 X 방향으로 해당 아이템의 index를 곱한만큼 이동하게 했습니다.**

📌 **어려웠던 점**

>토글과 달리 확장성있게 메뉴가 더 추가되더라도 정상적으로 작동해야하는 컴포넌트인데, 어떻게 CSS를 관리하면 좋을까?

라는 생각이 가장 먼저 들었습니다. 저는 Toggle과 Tab은 **전혀 다른 기능**이라고 생각했습니다. **양자택일과 다지선다는 아예 궤가 다른 컴포넌트 제어를 필요** 로 하니까요. 결과를 봤을 때 나름 만족스럽게 CSS속성을 부여해 큰 고민은 하지 않았습니다.

<hr>

### Slider

![SLIDER](https://user-images.githubusercontent.com/87627359/164742061-93423b18-4b2d-4661-ad24-eb4467779f18.gif)

✔️ **기능 구현**

현재 볼륨이 몇 퍼센트인지 표시할 값은 State로 관리했고, input type='range'의 target.value가 바뀔 때마다 setState로 동적인 변경을 주었습니다.

**input type range는 기본 CSS속성으로는 Customization이 불가능해 기본 CSS속성에 appearance: none을 부여, 브라우저 엔진 webkit을 이용해 커스터마이징을 진행하였습니다.**

기능적인 부분에서 어려움은 전혀 없었으나 후술할 극악 난이도의 CSS가 있었습니다.

📌 **어려웠던 점**
> 아, 이래서 난이도가 높았구나 ^^;

 처음 기능 구현 안내 페이지를 봤을 땐,
 > 어? input type range랑 state만써도 충분히 작업 끝내겠다.
 
 라는 어리석은 생각을 하였으나, 기능 구현을 다하고 나니 CSS에서 어려움이 굉장히 많았습니다.

 [![](https://user-images.githubusercontent.com/8939680/66600408-0e922e80-eb6b-11e9-97c6-2d4eb439e3ae.png)](https://user-images.githubusercontent.com/8939680/66600408-0e922e80-eb6b-11e9-97c6-2d4eb439e3ae.png)
 
특히 이 이미지에서 range-progress는 webkit으로 제어가 불가능해 range-thumb를 제외한 나머지**input 태그 속성을 커스텀하려면 input 태그에 appearance: none 속성을 부여하고, 새로운 div 태그로 Input type='range' 의 UI를 그대로 모방해, position:relative와 absolute를 사용해 range-thumb와 range-progress-bar가 상호작용할 수 있도록 하고, 또 그 range-progress위에 range-progress 역할을 직접적으로 해줄(input의 e.target.value, 즉 볼륨만큼의 width를 background-color로 칠해 progress-bar처럼 보이게 만드는 실질적인 div) 태그를 만들어 진행**했습니다.

>요약
>- input 태그는 커스텀이 불가능하다
>- progress-bar역할을 div박스가 대신해줘야 한다
>- 사용자가 설정한 volume에 맞춰 progress-bar역할을 하는 div의 width에 background-color을 부여해야 그럴듯한 커스터마이징이 가능하다.
>- 사람살려

**그에 더해서,** 볼륨 막대기를 보면 일정 퍼센티지를 지날 때 마주치는 동그라미들이 보이는데, 이것 또한 input 속성으로 제어할 수 없어서, **다섯 개의 div를 생성해 position:absolute로 input 태그와 상호작용**할 수 있게 해줬습니다.

📝 **그래도 남는 아쉬움**

사실 결과물이 만족스럽지 않아, input 태그에 커스터마이징을 아예 포기하려고 했었습니다. 별거 아닌 거 같은 디자인은 어느새 큰 숙제가 돼있었습니다. 만약 원티드 프리 온보딩 프론트엔드 코스에 참여할 수 있다면, 완벽하게 구현한 동료 개발자에게 꼭 물어보고싶습니다.

> 이거 도대체 어떻게 구현하셨어요? 얼마나 걸리셨어요?

<hr>

### Input

![INPUT](https://user-images.githubusercontent.com/87627359/164742985-2c9ace22-dcb9-4d55-83cd-3ca3515e7e5d.gif)

✔️ **기능 구현**

Input을 객체로 관리, 비구조화할당, 다이나믹한 키값 부여로 최대한 효율적이게 변수들과 state를 관리했습니다. useEffect 훅을 이용해 email input에 들어갈 value를 deps에 추가, 사용자가 email을 입력할때 event.target.value를 정규식에 계속 비교하면서 emailValid의 boolean값을 setState시켜주고,

Material-ui/icons를 이용해 아이콘을 불러와 컴포넌트화시켜 emailValid의 boolean값을 이용해 아이콘의 background-color를 조절해 사용자가 올바른 이메일 형식을 기입했는지 알 수 있게 조정했습니다.

Password도 비슷하게 passwordVisible이란 state를 boolean값으로 관리, 아이콘을 눌렀을 때 true/false를 번갈아가며 변경되게 하고, 조건적으로 렌더링을 진행해 state값이 true/false일때 서로 다른 아이콘 컴포넌트를 렌더링했습니다.

📌 **어려웠던 점**
아무래도 개발을 공부하다보면 누구나 접하게되는 로그인의 대명사인 컴포넌트라, 어려운 부분은 크게 없었습니다. 

<hr>

### Dropdown

![DROPDOWN](https://user-images.githubusercontent.com/87627359/164743451-85059912-a34e-4317-b461-6c94e4ca2100.gif)

✔️ **기능 구현**

메뉴를 배열로 관리했고, input의 target.value를 state에 저장하고, 특정 단어로 메뉴를 검색하는 기능을 구현할 땐, filter( ) 메서드를 이용해
>menu가 state에 저장된 string을 includes하는가?

**로 배열의 불변성을 지키며 새로운 메뉴를 렌더링해줬습니다.**

또한 생성된 메뉴들을 클릭했을 때, '오늘의 식사는?' 이라는 문구가 새겨져있는 div의 content를 클릭한 메뉴의 이름이 나오도록 했습니다.

생성된 메뉴들은 CSS속성 중 :hover을 이용해 text color와 background-color에 변경을 주어 약간의 UX를 부여했습니다.

📌 **어려웠던 점**

Input 컴포넌트와 마찬가지로 큰 어려움은 없었습니다.

<hr>

### 💬 그리고 느껴진 것들

이번 기능 구현 과제를 직접 겪어보고 나니, 평소 애용하는 Material-ui가 얼마나 소중한 라이브러리인지 다시 한 번 깨달았습니다.

처음 개발을 시작했을 때, 프로젝트 팀원들과 기술 스택에 대해서 상의할때

>나는 그냥 CSS 모듈로 일일히 작업하는게 편해.

라고 말한적이 있습니다. 사실 그때 당시는 **Material-ui라는 새로운 라이브러리를 배워야한다는 사실이 겁나 기존에 익숙하던 css속성을 직접 제어하는게 낫겠다라는 약한 마음**이었죠.

그때는 지금처럼 모든 태그들에 className을 부여하고, css-module을 사용해 개별적으로 관리하며 개발해나갔었는데. 오랜만에 초안부터 CSS작업을 해보니 개발에 어리숙했던 저의 모습이 생각납니다.

>내가 직접 제어한 CSS속성이, Material-ui, Ant-deisgn, Chakra-ui 등 디자인, 템플릿 라이브러리보다 더 쓸만할까?

이렇게 작업해보니 제가 얼마나 기초가 부족한지 깨달았고, 부족했던 css공부가 얼마나 개발 효율(시간 대비 기능 구현)에 영향을 미치는지 뼈저리게 느꼈습니다.

>만약 내가 기능 구현 과제가 아니라면, 컴포넌트 태그들을 좀 더 간결하게, 변수들을 최소한으로 썼을까?

이번 기능 구현 과제를 풀면서, "너무 CSS속성을 남발하나?", "조금 더 최적화할 수 있는 방법이 있을 거 같은데.." 라는 생각이 꽤 자주 들었습니다. 이번은 기능 - 기능 - 기능으로 각각의 기능이 어떻게 동작하는지에 대한 과제여서 그런지, 최적화나 컴포넌트 관리에 덜 신경썼던 거 같습니다.

>그럴 듯해보이면 되지.

라는 안일한 생각이 어느 순간 들었습니다. 그럴 듯한건 얇은 막 같아서, 걷어내면 쉽게 진실이 드러나는 안일한 타개책일 뿐인데, 프론트 엔드 개발자가 되기로 결심한 저에게 CSS속성이 절 이렇게 힘들게 할 줄 몰랐습니다.

프리온보딩 프로그램에 참가한 다른 개발자들도 저와 같은 생각을 했을까 궁금합니다. 분명 저와 비슷한 감정의 사람들이 있을 듯 싶은데, 같이 의견을 공유하며 성장하고 더 나은 개발자로 거듭나고 싶습니다.

이제는 조용히 결과를 기다릴 겁니다! 최선을 다했기 때문에 아쉽게 됐다는 말을 들어도 만족하고 더 나은 개발자가 되기 위해 끊임없이 정진해나갈 생각입니다. 감사합니다!
