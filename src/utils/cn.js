export default (...args) => {
    let result = '';
    args.forEach((item)=>{
        result = result + (item ? ' ' + item : '');
    });
    return result;
}
