const colorData = ['#fd7f6f', '#7eb0d5', '#b2e061', '#bd7ebe', '#ffb55a', '#ffee65', '#beb9db', '#fdcce5', '#8bd3c7']

export function colorPicker(len){
    const color = []
    for (let i =0; i < len; i++){
        color.push(colorData[i])
    }    
    return color
}