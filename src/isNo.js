function isNo(text) {
    text = text.toLowerCase();
    if(text === 'no' || text === 'n') {
        return true;
    } else {
        return false;
    }
}

export default isNo;