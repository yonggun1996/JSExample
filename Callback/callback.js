// 동기와 비동기
// 자바스크립트는 기본적으로 동기적으로 실행된다
// 호이스팅 : var이나 function선언들이 제일 위로 올라가는 현상

console.log('1')
setTimeout(() => console.log('2'), 1000)
console.log('3')

// 1,2,3이 순서대로 나오는 것을 동기
// Timeout을 걸면 1,3이 나오고 1을 찍고 난 1초 후 2가 콘솔에 나온다.

//동기적인 콜백
//js엔진이 함수선언을 위로 올려서 실행시킨다.
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

//비동기적인 콜백
//브라우저 api를 통해 원하는 시간 만큼 delay를 줘서 비동기적으로 실행되도록 하는 코드
function printWithDelay(print, time){
    setTimeout(print, time);
}

printWithDelay(() => console.log('async call back'), 2000);

/* 콜백지옥 예시 */
class UserStorage{
    // 로그인 과정이 2초 정도 걸린다고 가정
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'park' && password === 'qkrdydrjs1!')||
                (id === 'lee' && password === 'lee123!')
            ) {
                // 로그인 성공시
                onSuccess(id)
            } else {
                // 로그인 실패시
                onError(new Error('not Found'))
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'park') {
                //유저가 나여서 성공한 경우
                onSuccess({ name: 'park', role: 'admin' })
            } else {
                // 유저가 아닐 경우
                onError(new Error('not Found'))
            }
        }, 1000)
    }
}

// 1. 사용자에게 id와 password를 받아오기

// 2. 로그인하기
// 2-1. 성공시 역할을 받아오기
// 2-2. 이름과 역할이 들어있는 object를 반환하기

const id = 'park'
const password = 'qkrdydrjs1!'
const userStorage = new UserStorage()

userStorage.loginUser(
    id, 
    password, 
    user => {
        // user는 함수가 성공적으로 호출 시 넘기는 id
        // 로그인 성공시 호출하는 콜백 함수
        userStorage.getRoles(
            user, 
            userWithRole => {
                // 유저가 확인 시 넘기는 object
                // 역할 확인시 호출하는 콜백함수
                console.log(userWithRole);
                alert('로그인 성공')
            },
            error => {
                // 역할 확인 실패시 호출
                console.log(error)
            }
        )
    },
    error => {
        //로그인 실패시 호출하는 콜백
        console.log(error)
    }
)