var task_array = [2, 7, 3, 7],
    findMaxValue = ( search_array ) => {
        return Math.max( search_array.join(',') );
    },
    countElements = ( search_array, search_value ) => {
        var counter = 0;
        search_array.forEach(function(item){
            if(item == search_value){
                counter += 1;
            }
        })
        return counter;
    }

    max_value = findMaxValue(search_array);
    count = countElements(max_value);

