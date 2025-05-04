export function merge ( collection_1: number[], collection_2: number[], collection_3: number[]) : number [] {

    const col1  = collection_1;
    const col2  = collection_2.reverse();
    const col3  = collection_3.reverse();

    let index1  = collection_1.length - 1;
    let index2  = collection_2.length - 1;
    let index3  = collection_3.length - 1;

    let out = [];

    while(true){
        if(index1<0){
            if(index2<0){
                if(index3<0){
                   break;
                } else {
                    out.push(col3[index3]);
                    index3--
                }
            } else {
                if(index3<0){
                    out.push(col2[index2]);
                    index2--;
                } else {
                    if(col2[index2] <= col3[index3]){
                        out.push(col2[index2]);
                        index2--;
                    } else {
                        out.push(col3[index3]);
                        index3--;
                    }
                }
            }
        } else {
            if(index2<0){
                if(index3<0){
                    out.push(col1[index1]);
                    index1--;
                } else {
                    if(col1[index1] <= col3[index3]){
                        out.push(col1[index1]);
                        index1--;
                    } else {
                        out.push(col3[index3]);
                        index3--;
                    }
                }
            } else {
                if(index3<0){
                    if(col1[index1] <= col2[index2]){
                        out.push(col1[index1]);
                        index1--;
                    } else {
                        out.push(col2[index2]);
                        index2--;
                    }
                } else {
                    if(col1[index1] <= col2[index2] && col1[index1] <= col3[index3]){
                        out.push(col1[index1]);
                        index1--;
                    } else if(col2[index2] <= col1[index1] && col2[index2] <= col3[index3]) {
                        out.push(col2[index2]);
                        index2--;
                    } else {
                        out.push(col3[index3]);
                        index3--;
                    }
                }
            }
        }
    
    }

    console.log(out)
    return out;   
}
