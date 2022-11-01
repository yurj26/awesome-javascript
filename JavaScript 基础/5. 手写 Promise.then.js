/**
 * then 方法返回一个新的 promise 实例，为了在 promise 状态发生变化时（resolve / reject 被调用时）再执行 then 里的函数，
 * 我们使用一个 callbacks 数组先把传给then的函数暂存起来，等状态改变时再调用。

 那么，怎么保证后一个 then 里的方法在前一个 then（可能是异步）结束之后再执行呢？
 我们可以将传给 then 的函数和新 promise 的 resolve 一起 push 到前一个 promise 的 callbacks 数组中，达到承前启后的效果：
 ● 承前：当前一个 promise 完成后，调用其 resolve 变更状态，在这个 resolve 里会依次调用 callbacks 里的回调，这样就执行了 then 里的方法了
 ● 启后：上一步中，当 then 里的方法执行完成后，返回一个结果，如果这个结果是个简单的值，就直接调用新 promise 的 resolve，让其状态变更，这又会依次调用新 promise 的 callbacks 数组里的方法，循环往复。
 如果返回的结果是个 promise，则需要等它完成之后再触发新 promise 的 resolve，所以可以在其结果的 then 里调用新 promise 的 resolve
 */


// then(onFulfilled, onReject){
//     // 保存前一个promise的this
//     const self = this;
//     return new MyPromise((resolve, reject) => {
//         // 封装前一个promise成功时执行的函数
//         let fulfilled = () => {
//             try{
//                 const result = onFulfilled(self.value); // 承前
//                 return result instanceof MyPromise? result.then(resolve, reject) : resolve(result); //启后
//             }catch(err){
//                 reject(err)
//             }
//         }
//         // 封装前一个promise失败时执行的函数
//         let rejected = () => {
//             try{
//                 const result = onReject(self.reason);
//                 return result instanceof MyPromise? result.then(resolve, reject) : reject(result);
//             }catch(err){
//                 reject(err)
//             }
//         }
//         switch(self.status){
//             case PENDING:
//                 self.onFulfilledCallbacks.push(fulfilled);
//                 self.onRejectedCallbacks.push(rejected);
//                 break;
//             case FULFILLED:
//                 fulfilled();
//                 break;
//             case REJECT:
//                 rejected();
//                 break;
//         }
//     })
// }
/**
 * 注意：
 ● 连续多个 then 里的回调方法是同步注册的，但注册到了不同的 callbacks 数组中，因为每次 then 都返回新的 promise 实例（参考上面的例子和图）
 ● 注册完成后开始执行构造函数中的异步事件，异步完成之后依次调用 callbacks 数组中提前注册的回调
 */
