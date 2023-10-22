// promise : js에서 비동기 적인 로직을 처리할 때 사용되는 js에서 내장된 기능 중 하나
// state : pending / fulfilled / rejected
// producer vs consumer

// 1. producer
// promise가 만들어 지는 순간 네트워크 통신이 이뤄진다.
const promise = new Promise((resolve, reject) => {
    // api를 호출할 때 시간이 걸리기 때문에 
    // 그 다음라인 코드가 실행되지 않을 수 있다
    console.log('doing something.....')
    setTimeout(() => {
        resolve('YG') // 성공시 해당 문자열 반환
        //reject(new Error('no Network'))
    }, 2000)
});

// consumer : then, catch, finally
promise
    .then((value) => {
        // 성공한 값을 핸들링
        console.log('value : ', value)
    })
    .catch((error) => {
        // 실패한 값을 핸들링
        console.log('error : ', error)
    })
    .finally(() => console.log('finally'))

    // promise chaining
    const fetchNumber = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    })

    fetchNumber
        .then(num => num * 10)
        .catch(error => {
            // 곱하는 과정에서 error이 발생할 때 핸들링
            return 1;
        })
        .then(num => num/2)
        .catch(erorr => {
            // 곱하는 과정에서 error이 발생할 때 핸들링
            return 1;
        })
        .then(
            num => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => resolve(num - 1), 1000)
                })
            }
        )
        .then(num => console.log('num : ', num))
