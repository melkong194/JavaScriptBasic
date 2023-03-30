var select  = document.querySelector(".custom-select");
if(select){
    var options = select.querySelectorAll('option');
    // console.log(options)

    var wrapperD = document.createElement('div');
        wrapperD.classList.add('wrapper-select');
        // console.log(wrapper);

    var selectedD = document.createElement('div');
        selectedD.classList.add('selected')
        //add event for div selected
        selectedD.addEventListener('click', function(event){
           this.parentElement.classList.toggle("open-select");
            // console.log(this);
        })
        if(options.length>0){
            selectedD.setAttribute('my-value',options[0].getAttribute('value'));
            selectedD.innerText = options[0].innerText;
            // console.log(selectedD);
        }

    var ul = document.createElement('ul');
        ul.classList.add('list-option');
        
    options.forEach(function(elem,index){
        // console.log(elem);
        var li = document.createElement('li');
        li.setAttribute('my-value', elem.getAttribute('value'));
        li.innerText = elem.innerText;

        //add data for selected DIV
        if(elem.getAttribute('selected') !== null){
            selectedD.setAttribute("my-value", elem.getAttribute('selected'));
            selectedD.innerText= elem.innerText;
        }

        //addEventListener
        li.addEventListener('click',function(){
            selectedD.innerText = this.innerText;
            selectedD.setAttribute('my-value',this.getAttribute('my-value'));

            //remove selected cu~ & add selected moi*'
            // removeAllSelected(options);
            if(select.querySelector('option[selected]')){
                select.querySelector('option[selected]').removeAttribute('selected');
            }
            
            options[index].setAttribute('selected', true);
            // console.log(options[index]);

            //hidden li-list: options

            // this.parentElement.parentElement.classList.remove('open-select');
        })

        ul.append(li);
    })

    wrapperD.append(selectedD)
    wrapperD.append(ul);

    select.parentNode.insertBefore(wrapperD,select);

    // function removeAllSelected(list){
    //     list.forEach(function(elem){
    //         elem.removeAttribute('selected');
    //     })
    // }

    //click outside to hide list
    document.addEventListener('click', function(event){
        // if(event.target.classList[0] !=='selected'){
        //     wrapperD.classList.remove('open-select');
        // }
       
        if(event.target.closest(".wrapper-select > .selected")==null)
            wrapperD.classList.remove('open-select');
    })

}
