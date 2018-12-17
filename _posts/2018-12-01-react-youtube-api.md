---
layout:       post
title:        "[React] 토이 프로젝트 - 유튜브 목록 페이지"
subtitle:     "Youtube api를 이용한 유튜브 목록 페이지 만들기"
date:         2018-12-01 19:00:30
author:       "Sumim"
header-img:   "img/in-post/thumb/react.jpg"
header-mask:  0.3
catalog:      true
multilingual: true
comments: true
categories: [react]
tags:
    - react
    - toyproject
---



# [React] 토이 프로젝트 - 유튜브 목록 페이지



>  Youtube api를 이용한 유튜브 목록 페이지 만들기



유튜브 목록 및 동영상을 플레이할 수 있는 SPA를 제작했다. 상단 검색창에서 원하는 키워드를 검색하면 해당 키워드와 일치하는 비디오 리스트가 화면에 렌더링되며, 각 비디오를 클릭했을 때 상세설명과 함께 유튜브 iframe을 보여줄 수 있도록 했다. 프로젝트에 진행한 작업은 다음과 같다.

```
작업 
- API 불러오기 (youtube-api-search)
- 프로젝트 Component 작성
- 스타일 추가 (bootstrap, src/App.css)
- 프로젝트 build하여 디플로이 (surge.sh)
```



## API 연동하기

```
npm install --save youtube-api-search
```

커맨트 창에 npm으로 [youtube-api-search](https://www.npmjs.com/package/youtube-api-search) api를 설치한다. 이 때 해당 api를 활용하기 위해서는 api key값이 필요하므로  [Google Cloud Platform](https://console.cloud.google.com/) 에서 API 및 서비스 > 사용자 인증 정보에서  api 키를 생성한다.



## 프로젝트 Component 작성

제작에 사용한 컴포넌트는 다음과 같은 구조로 되어있다.

```
src/App.js

	├ src/VideoSearch.js

	├ src/VIdeoDetails.js

	└ src/VIdeoList.js

	   └ src/VIdeoItem.js
	
```



#### App.js

```react
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoSearch from './VideoSearch';
import VideoDetails from './VideoDetails';
import './App.css'
const API_KEY = "AIzaSyC_SMfYoEP1JbCZFCHr8dgEqirsu1df_MM";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      selectedVideo: null,
      term: ''
    }
    
    this.videoSearch('소녀시대')
  }
  
  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term }, data => {
      this.setState({ 
        data: data,
        selectedVideo : data[0],
        term: term
      });
    });
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }

  render() {
    return (
      <div className="App">
        <header className=" pt-3">
          <div className="navbar">
            <div className="container justify-content-between">
              <a href="http://sumim-project.surge.sh/" className="navbar-brand text-white"><h2>Youtube List</h2></a>
              <VideoSearch onCreate={this.videoSearch}/>
            </div>
          </div>
        </header>
        <main className="container pt-3">
          <VideoList 
            videos={this.state.data} 
            onVideoSelect={(selectedVideo) => this.onVideoSelect(selectedVideo)}
          />
          <VideoDetails 
            video={this.state.selectedVideo}
          />
        </main>
      </div>
    );
  }
}

export default App;
```

App.js 에선 import를 통해 다른 컴포넌트를 불러와 연결시켰고, YTSearch() 함수를 불러와 key 정보(API_KEY), 검색할 단어(term)를 입력해 데이터(data) 배열을 리턴한다.



#### VideoSearch.js

```react
import React, { Component } from 'react';


class VideoSearch extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            term: '' 
        }
    }
    
    onHandleChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    ocHandleSubmit = (e) => {
        e.preventDefault()
        this.props.onCreate(this.state);
    }

    render() {
        return (
            <form onSubmit={this.ocHandleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.term} onChange={this.onHandleChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-danger" type="submit">Search</button>
                    </div>
                </div>
            </form>
        )
    }

    
}

export default VideoSearch;
```

VideoSearch에서는 JSX문법으로 input를 생성하고, input값이 변경되면 onHandleChange() 메서드를 통해 해당 값이 부모 컴포넌트인 App.js의 term값으로 리렌더링될 수 있도록 한다. 그리고 Search를 클릭하면 ocHandleSubmit() 메서드를 통해  App.js의 videoSearch() 메서드를 실행하도록 한다. 



#### VIdeoList.js

#### VIdeoItem.js

#### VIdeoDetails.js



