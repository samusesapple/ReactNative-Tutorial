# ReactNative-Tutorial
React Native 기초 내용을 학습하며 배운 내용을 기록합니다.
<br>
<br>
<br>



### 컴포넌트
---

#### View 와 View를 꾸미는 StyleSheet
    
  > 다른 컴포넌트를 감싸는 역할을 함. 화면에 보여지기 위해선 View 태그 안에 감싸져야함
  > 
  - view 태그가 중첩적으로 여러번 겹쳐져 있어도 됨
        
    ```jsx
        class App extends Component {
          render() {
            return (
              <View> // View 태그 안에 여러개의 View들이 중첩적으로 들어있음
                <View>
                  <Text> Hello, World! </Text>
               </View>
                <View>
                  <Text> Hello, World! </Text>
                </View>
               <View>
                  <Text> Hello, World! </Text>
               </View>
            </View>
            )
          }
        }
    ```
        
    
- View의 스타일을 주는 방법 (정렬, 배경색 등)
    
    1. in line styling ;  View 태그 안에 스타일을 주는 것
        1. `style={{ }}` 형태
            → 첫번째 중괄호는 JSX를, 두번째 중괄호는 객체를 담는 것을 의미함
            
        
    ```jsx
        class App extends Component {
          render() {
            return (
              **<View style={{ 
        			background: 'green',
        			marginTop: 50,** // **view 외부** 다른 컴포넌트의 top 간격
        			**paddingTop: 10**, // **view 내부** 속하는 다른 컴포넌트의 top 간격
        			height: '100%' // 100프로 화면 높이 채우기 
        		**}}>** 
                  <Text> Hello, World! </Text>
            **</View>**
            )
          }
        }
    ```
  <br>
  
    2. StyleSheet 클래스 객체를 만들어서 해당 속성을 view 태그에 넣어주는 것
        1. `const styles = StyleSheet.create({ 정의할 스타일 프로퍼티 내용 })`
            
            → 객체를 담을 필요 없으므로 `<Viewstyle={스타일.적용할스타일프로퍼티}>`
            
        
     ```jsx
        import { StyleSheet } from 'react-native';
        
        class App extends Component {
          render() {
            return (
              **<View style={styles.mainView}>**
                  <Text> Hello, World! </Text>
        	    </View>
            )
          }
        }
        
        const styles = StyleSheet.create({
          mainView: {
            flex: 1,
            backgroundColor: 'green',
            **alignItems: 'center', // 수직 정렬
            justifyContent: 'center' // 수평 정렬**
          }
        })
     ```
  <br>
  
   - StyleSheet에서의 flex란?  
          ![image](https://github.com/samusesapple/ReactNative-Tutorial/assets/126672733/4755f3f6-db62-4213-8ec1-f3b65b347dbf)

        
#### 컴포넌트 분리해서 정의 + 분리된 컴포넌트 불러와서 사용하는 법
    
  1. 사용할 컴포넌트 정의하기
    
  > `const 컴포넌트명 = () ⇒ (컴포넌트 UI 정의)` 형태로 생성
  > 
  - **JSX 컴포넌트를 리턴하는 것이기 때문에 소괄호 () 내에서 정의해야한다.**
        - 참고 : { } 중괄호 사용시 리턴값이 없는 실행 함수가 되어버림
    
    ```jsx
    import React, { Component } from 'react';
    import { View, Text, StyleSheet } from 'react-native'
    
    // 컴포넌트 정의하기 props로 state값 넘겨와서 component 설정도 가능
    const Header = (props) => (
          <View style={styles.header}>
              <Text style={styles.mainFont}> {props.name} </Text>
        </View>
    )
    
    // 컴포넌트의 사용할 스타일 정의
    const styles = StyleSheet.create({
      header: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '80%'
      },
      mainFont: {
        fontSize: 20
      }
    })
    
    export default Header; // export 하기
    ```
    
    2. 정의된 컴포넌트를 사용할 곳에 불러오기
    
    > 1.  컴포넌트 파일 경로에서 불러오기 `import 사용할컴포넌트명 from ‘해당 컴포넌트 경로’;`
    2. `<컴포넌트명/>` 형태로 사용할 곳에 불러와서 사용하기
    > 
    
    ```jsx
    import React, { Component } from 'react';
    import { View, Text, StyleSheet } from 'react-native'
    **import Header from './source/header'; << 컴포넌트 정의한 파일 경로에서 불러오기**
    
    class App extends Component {
    	state = {
    		 appName: 'my first app'
    	}
      render() {
        return (
          <View style={styles.mainView}>
            **<Header name={this.state.**appName}**/>  << 컴포넌트 사용하기**
        </View>
        )
      }
    }
    ```
<br>
<br>

#### Button
        
  1. 버튼을 감싼 View를 만들어주는 Generator 컴포넌트 정의하기
  2. 무조건 title을 정해줘야함
  3. 버튼 액션은 `<Button onPressed={버튼 액션 정의}>` 형태로 정의하기
  4. 버튼 백그라운드 스타일을 주고싶다면, `View style` 설정하기
        
        ```jsx
        import React, { Component } from 'react';
        import { View, Text, StyleSheet, Button } from 'react-native'
        
        const Generator = () => {
            return (
                <View
                style={styles.generator}
                >
                    <Button
        								**onPress={()=>alert('button pressed')}**
                        **title='Add Numbers'** 
                    />
                </View>
            )
        }
        
        const styles = StyleSheet.create({
            generator: {
                backgroundColor: '#10CDFF',
        				padding: 5,
        				width: '100%',
        				alignItems: 'center'
            }
        })
        
        export default Generator;
        ```
        
  5. 버튼 사용할 View에서 불러오기 + 버튼 액션 정의해서 넣어주기
        
        ```jsx
        import Generator from './source/generator';
        
        ...
        
        // state 밑에 버튼 액션 정의하기
        onAddRandomNum = () => {
            // Math.random()으로 0~1까지의 랜덤 소수 생성 -> 소수 * 100 -> Math.floor로 소수점 이하 버림 -> +1 하여 1~100까지 랜덤 숫자 만들 수 있도록 함
            const randomNum = Math.floor(Math.random()*100)+1;
            this.setState(prevState => {
              return {
                numbers: [...prevState.numbers, randomNum]
              }
            })
          }
        
        // 버튼 액션 넣어주기
        <Generator action={this.onAddRandomNum}/>
        ```
        
   6. 버튼 Generator : 정의된 버튼 액션을 props를 통해 받아서 설정해주기
        
        ```jsx
        * 정의된 버튼 액션 props를 통해 받아서 설정해주기
        
        const Generator = (props) => {
            return (
                <View
                style={styles.generator}
                >
                    <Button
                        **onPress={()=>props.action()}**
                        title='Add Numbers'
                    />
                </View>
            )
        }
        ```
        
<br>
<br>

### Touch Event
---

> 참고 공식 문서 : [https://reactnative.dev/docs/touchableopacity](https://reactnative.dev/docs/touchableopacity)
> 

#### 터치 이벤트 종류
  ![image](https://github.com/samusesapple/ReactNative-Tutorial/assets/126672733/673109a3-7164-41f7-a5cd-6419fca3a4da)
<br>


#### View에 터치 이벤트 발생시키기

1. `TouchableOpacity` 를 import 하기 

2. `<TouchableOpacity> 터치를 활성화 할 View </TouchableOpacity>`

3. `<TouchableOpacity
 style={감싸진view의스타일}
onPress={ 터치시 실행될 내용 }
>`
<br>

- 버튼 누른 티 안 나게 하려면 `TouchableWithoutFeedback` 사용
    - `TouchableWithoutFeedback` 사용한 경우, view style은 view 태그 안에 적용시켜야함

```jsx
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Header = (props) => (
    <TouchableOpacity
        **style={styles.header}   << 터치되는 view 스타일 적용**
        onPress={()=>alert('얼럿내용')} << 터치하면 alert창 띄우도록
    >
        <View>
              <Text style={styles.mainFont}> {props.name} </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '80%'
  },
  mainFont: {
    fontSize: 20
  }
})
```
<br>

#### 텍스트에 터치 이벤트 발생시키기

- TouchableOpacity 굳이 import 안 해도 됨.

`<Text`

`style={텍스트 스타일}`

`onPress={()⇒액션}`

`> 텍스트내용 </Text>`

```jsx
class App extends Component {

  state = {
    appName: '앱 이름 1'
  }

  render() {
    return (
      <View style={styles.mainView}>
          **<Text
          style={styles.mainText}
          onPress={()=>alert('press')}**
          > 여기를 눌러주세요. **</Text>**
    </View>
    )
  }
}
```

<br>
<br>


### Class의 state 
---

> state는 class 안에서만 정의할 수 있으며, state에 따라 다른 화면을 그릴 수 있도록 설계한다.
> 
- **state값은 직접적으로 변경하면 안된다.**
    - state는 rendering되는 데이터를 관리한다. 직접 변경 X
    
    → 직접 변경하면 화면이 다시 rendering 되지 않기에 해당 값이 화면에 반영 안됨.
    
- `**setState({ 변경 내용 })` 를 통해 state값을 변경**해야한다.
    
    ```jsx
    	// state는 class 내부에서만 사용 가능, render() 전에 선언
      // state의 값에 따라 화면을 다르게 구성할 수 있음
      state = {
        sampleText: 'Hello World',
        sampleBoolean: true         -> 초기화 값
      }
    
      // state.sampleBoolean 값이 토글되도록 state 변경하기
      changeState = () => {
        if (!this.state.sampleBoolean) {
          **this.setState({**
            sampleBoolean: true,
    				sampleText: 'TRUE!'
          **})**
        } else {
          **this.setState({**
            sampleBoolean: false,
    				sampleText: 'FALSE!'
          **})**
        }
      }
    
    	render() {
        return (
          <View style={styles.background}>
            <Text **onPress={this.changeState}**> <- 텍스트가 눌리면 changeState()호출
              **{this.state.sampleText}**   <- changeState()에 의해 변경된 text 보여줌
            </Text>
          </View>
        );
      }
    ```
    
- setState의 동작 과정 및 올바른 사용법
    1. 기존의 state값을 복사한다.
    2. 업데이트 진행한다.
    
    ⇒ 기존의 state값을 이용한 값 변화를 하고 싶은 경우엔 prevState 콜백함수 활용
    
    ```jsx
    // 이렇게 하면 에러 발생함 (기존의 state값에 +1을 하는 것이므로 콜백함수 활용해야함)
    onAddNum = () => {
        this.setState({
          sampleNum: sampleNum + 1
        })
      }
    
    // 올바른 사용법 - 이전 state값인 **prevState를 활용한 콜백함수 사용**
    onAddNum = () => {
    		**this.setState(prevState => {
    		return {
    			sampleNum: prevState.sampleNum + 1
    		}	
    	})**
    }
    ```
<br>
<br>

### Props
---

> 부모 객체로부터 물려받은 **읽기 전용 property**
> 
- 부모의 속성을 그대로 자식 컴포넌트에 물려주기 위한 read only 속성이다.
- Props 활용 방법
    1. 부모 객체에서 물려주고 싶은 데이터 지정 (메서드, state값 등)
    2. 데이터를 물려받을 자식 객체 파일 생성 및 정의
    3. 부모 객체 : **물려받을 props명 정의**해서 해당 **props에 물려줄 데이터 넣어줌**
    4. 자식 객체 : **부모가 정의한 데이터명을 props 파라미터 통해서 그대로 물려 받음**
    
    ```jsx
    // 부모 객체 (물려줄 데이터 지정 + 물려주기)
    
    class App extends Component {
    
      state = {
    		// 물려줄 것 1
        **sampleText: 'Hello World',**
        sampleBoolean: true,
        sampleNum: 1
      }
    
      // 물려줄 것 2
      **changeState = ()** => {
        if (!this.state.sampleBoolean) {
          this.setState({
            sampleBoolean: true,
            sampleText: 'sampleBoolean is True!!!!!'
          })
        } else {
          this.setState({
            sampleBoolean: false,
            sampleText: 'sampleBoolean is False!!!!!'
          })
        }
      }
    
      render() {
        return (
          <View style={styles.background}>
    **물려주기 + 자식으로 화면 그리기 (props에 들어갈 motherSampleText, motherChangeState 정의해서 줌**)
            **<PropsChild motherSampleText={this.state.sampleText} motherChangeState={this.changeState}/>**
          </View>
        )
      }
    }
    ```
    
    ```jsx
    // 부모 객체(App)로부터 물려받은 데이터를 props 인수로 받음 
    // (props 인수 안에 .**motherChangeState**, .**motherSampleText** 데이터 물려받음)
    
    // 파라미터를 통해 물려받은 props로 text 터치 액션 지정, text 데이터 지정
    const PropsChild = **(props)** => {
        return (
            <View>
                <Text **onPress={props.motherChangeState}**>
                    **{props.motherSampleText}**
                </Text>
            </View>
        )
    }
    ```
    
<br>
<br>

### 기타
---

#### 배열`.map` 을 이용하여 여러개 View 만들기
  1. **NumberListView의 파라미터에 Array 넘겨주기**
        
        ```jsx
        <NumberListView numbers={this.state.randomNums}/>
        ```
  
  2. **NumberListView 에서는 props를 통해 Array 받기 → map 하기**
        1. `((item, index) ⇒ ( 반복해서 생성할 View ))` 형태로 만들면 됨
        2. `key = {index}`를 줘서 **각 View별로 key값을 갖도록 해야 오류 발생 안 함**
        
        ```jsx
        const NumberListView = (props) => {
            return (
              **props.numbers.map ((item, index)=>** (
                <View style={styles.numberList} **key={index}**>
                  <Text>랜덤 숫자: {item}</Text>
                </View>
              ))
            
            )
        }
        ```

