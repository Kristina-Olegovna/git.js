function myLocalScope() {

    let myVar = 'inside myLocalScope';

    console.log('inside myLocalScope', myVar);
}
myLocalScope();


console.log('outside myLocalScope', myVar);