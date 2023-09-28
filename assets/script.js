const candidatos = [
    {
        Image: "data:image/jpeg;base64,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",
        name: "Kayron Abreu",
        profession: "Músico",
        birth: "14/09/1996",
        phone: "(27) 99999-5665",
        email: "kayronabreu@gmail.com",
    }
    {
        Image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgSEhUYGBEYGBgYGBgYGBgYGBgYGBgaGRgZGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQmISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDE0NDQ0NDQxNP/AABEIAQIAwwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAACAQIDBAgCCAMHBQEAAAABAgADEQQSIQUxQVEGEyJhcYGRoTKxBxRCUnKywdGCkvAjM2JzosLxFSQ0Q6MX/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAwACAgEDAwMFAAAAAAAAAAECAxEhMRIEMkETIlFCYXEUgZGh4f/aAAwDAQACEQMRAD8A6sHjiNIavHUecaZZMVo6DIavHUeaTehNEiCIVou82VJkhwQrwEx7QAgjbVAJHbFjhM3llFKWyZBIa4m8cFWT9ZB4skQSi2v0jpYfs3zVeCKCx88oNpgNsdOscD2AtNeWSx8w6n5x/Wn4GsbZ1yCcSwv0jYzMAzqbHUMiEEeQBE6DgenGHemHc5Xt2lGtjbh3R/Vn54B438cmsglPs3pHhsQctOoMx3K3ZJ/Dff5S4mipPolprsOCCCMQIIIIACCCCAAggggBnw8dV5GDRStODZoSusg62Rs0LNBsZZUaslBpT06tpNStHNaE1smF41Uqxk1YzUqR1bYKRrEVSYwGgqQIhJsJmWO0ySbDfKvpN0kpYFCGYGqRoL7pN29tJMFh3qH4gLLzZzuA/rhPPW0Mc+LrMxu7sSSbkwmfJ6+Pkc/ku9qdLa9QkpUsp+woKD1BufOVLbTd/iYm/M6iLTYLtra0dTo49tAZqvpzwW5t/BXpUzPYbxfX9ZLr12ByqNANb3/SOPs00QQR2z/Wp/SQ3PPf7y9p9ENNdkqhtEpbh56b+HfOl9D+nhGWniCWQ6Bjqy+J+0Pf5TkZa/DT3k7A1Qra7jv8OY7xvia1zPYu+GenadQMAykFSAQRqCDuIMXOddANvkEYWqd+tNr6HmB48vPiZ0O8ucu0ZVOmLvCvE3gjdi0KzQXjTGMu9pLyND0S7wSs64wRfVYaKsNFBo0DDBmBY7mhZoi8K8QxwNHVeRrxStACX1kIvGQ0BaLYxZF5Kwi2BbloPGQ1F9BvlgVCgLwUZm7yNYN6QHNPpX2loKKnVRu5swu3na3rKjoh0Y7AZhqdWPM8hGulN6+MRN+d2c+AIA/Ks6Hs7DZECjlM8mRzCS+TsxQu38DNLZyILBYiphF4KJYOIw6zk5OqWZ3amy1cHSYLbGzSh+R/edQxDaGUe0cKtRSLTow5KkjLjVI5laxsdIsNla3h+8mbRwWV8h0N9DwPLzkNkb4G0cbu/u/aegqTR5tS0zUbExVyFJsy2Kkbxyy/MeYnbdiY41qKuxBa1mI3EjiO4ix8553wdYlVZTZ1Nve4v7jwInYOge0esQr4G36+/tMK+2hteSNyGgvIy1IvPKVGWhbNIlZ447yJWeDYgs0ERBJGV4MWpjIMUDEUO3gvECKvAA4YiRFCABgxQMbvHsPTzkKP6HExDJWBTe53Dd4xrade1Gs/JWA9LfrJrns5F3WI9OZ8xKDpT2MIyA9ojU+J1kU/gqFtnMcXjGp41anVl1SmpsOGZieR7ptNi9KKOJORbpUG9G3+R4zAY7FOMaUpqCSi6E2FlUyx2LtNalUKEtUFjcWYbgSAw5A6+BlZMe5218HTjrnWzo1XEBRmJsO+VVXb+GU2eqi+Jje2yQgH3hMjU2fR0Z1BYmwFiSTyUC5J7gDOfHE12dFNyuDVHauGqHLTrITyvb5xioLTLpVwQPVsihuTIyHx7QB/4lxgktojlqfAMble4NxHjLeNT1v+5M5HX/DN9KE1zEacDKTDVRUGR+G4/aH7jum523hRUpMCNQLzm5JR9LggzqwvynX4OTMvGtls9IoSTxGpG4ka5vMfKbz6PsbZ8p43H62+ZmEqYhTSuTqPIgcQefjLroXirMhvqDofPT2MnIm52TPZ2wPaKNSRqNTOgbjx+R94bNIl7RFLQt6kYd4GaN31lGQ/BBaCBRVgwwYgGKEAHAYq8bEUDAYsGKEQIoQAWtpaUKFhlUG5tmY8vu3kHAU8za7hrLknKP647oAxuoANANTpMl0orBldOAA/aabFVci3+0Zz/bmIuap5ZV8y+v6zCnt6N8M/Jn8Dszrq7VCAfhtcX3KP1vNlgNlpT1yrm4GwuPAyt2AyhLzRUiMpY6aaTPJVPg7lKlFZj2Dtl5aRn/pmXLUpgZwBZhvFt3dI9SqQS9tBe+svsFWVlBHEXkLynouktGMr9Eg7s5Q3e5a5BBub6cpY4TY60Uyi9x33mjr1gspcViZTu64bImFPKRXYldCJjavR0M5ZnshO4b5q8XW4SE9PMhSxzNoLbwb6n0m0U46M7lX2Nrs80KP9mAqEjWwYvfmTwlJslMtR0XQBny8rAkG3daXWLJw2GyEkuXVUBvz325CV+ysKRVX0Pn/xNU3p7McmlpI6p0cxfWUQTvsvrbX3EsmMzHQhyUdDvDMP5WI+RE0jmTPRzX2ETCTfEXi6O+WZkxRDi1EERejPAxxTGFMdUxkIdBhxIgBgULWLiBFiAyy2WLBmO4Ef16mTXbdf8Xp/zIWC0U8ywPkI/iamgHdfy4TK60CW2Vu1cRYEnhr6f0Jzva1Q5CDvd7+SXN/5iBNftqoScg8/0/X0ExO1z1lQIu5bL6amZQ9vZ2JakTsTFMX6vv8AaaXaezXZWam7C4F13i+645aTPbFpZyXpmzZiQf3EvVq4sAMHR7bxouvgRaOk/JNHTKdSU+G2PVQENVNm3i1/G3KWtPFGkoUC4UW8hK/G1sWpuzJf8Q+WW0iUa+JqHXqwvE2Yk+FrCW5b5ega8SfX2pm3RgVi8dqYSwBPxm5NhbuEQFCyXr4E2yLWIUFm3DUxeG2giL1gYZcmcm+gG4a+koOleMsnVqdW3+HGUGFwbZDmZghIOW5tpe2m6+pm0Ypc+VM5bytVpFxQxLVj9Ye/xNlBJOVQV976y42Zo+u9Qzn8q/OV+DoFFCWsCu7lcG3nukvZw7bjnkTyAF/zXg3tvRH8m76K0MiF+OfXwKC/zl7UNtJUdFK4qU2IOhObvtu/SW2JW1rbrDhJgyyDeaP4XfIoMlYWaMyRZqsEUpggUZFDH1jSLHFjZKHIoRAihEULEVeIBj+HyX/tL27oDJ2AplrcguvrJOJTj3QsFVQdlL6+Z84rHmy2G8/17zLKl4jlvyMXtWrbOeOv7TNGl1dJ6rfESQPE66eQ+c1mIwpYuN9nHrYWHzPpKjpBhh1aoPssCe8m6n81/Oc8Vp6O34M/0LxYLtTbedV8Dv8AczWYrZTv2qZseOtrzl6VHovnQ2dX0PDfuPdOibM6V0qyBgcrjRlO9WG8H95tkik/KR4r48d8kd9lOpu4ue83klKdtLRdfb1PmPWVGM26g+Exfc+0aukvkssS4EocftBUBJMgYnar1NEB8ZU48mxLHWaRH5MLyccEVM2KxAB+E6W5KNP1ml+pBqgS39nTBd/Lh6gyp6K0wHzn7hI9Ln5+002IXq0xBO8sqk9xIH6ia5Hp6RhPWyMiZnUH4mW48eXziHpmlV10Vipvw7ahb+F7GNY9yoVl3oTb1vb5yfUqLi6V/wD2oNR95Drcf1vvwmPRT5L3oZWZGKH7OhG7Q3/aazEoQe46g/L9pkuiSF3B+3l1NtGtYA+PPnN8iIy5WtflxB7rxRtU/wAGeTop8sk4aSMRs8KLg3+cYo75szBFlmgjWeCAzOw1hGAQEhwQ7xMF4FDitJVDDFjqQBzbdbu4SCDH6dYgWzMBvspt62hoZf4SkqA21PO1vQQ3fQm2gF/MyrwGNKmzaA8bE+UsjWzAZdddLcfCZ3yhJclP1OVWJ1JZmPy/YSkrULo+ca6sfS/zE1Fb7psBYk+Atp7+8q8XTzs+VTdtAPLU+Hat4zl8WuTsmjke08NlcC2jPe/cO18hGuilO7MT9pmPvOjbX2HTekUZlD2+zqRcWOu7deZrY+xTRJub9/hOtZF4aJmW62O1tlqfsiRf+jrymiyaRDU5Ko2clC2EVBoJltuvw5mbjFpppMltjBlrkC9tZpjr7tsyyLjgXsayMpPwmmt/wnMrHyzAzZ1sMK1B/vZQjjkybm8CNb/tMTs5wMt+AI8Qb6elvSaPZW0erIAa+mVTvuv3KijU24MIsvL2iJ60U2OxORsjg5TYhuHI+YPzjGGqsrrkOubQWuN+o8DymmxNGlXYpTALn/1k7jxyHf5SbsHo+tNxVddQLAMLajce+JP9ia4ND0ZwgoL1jaM32fug+MtcXiAx7O6Qw94hm1jmdMyqtkwGLpb4ym6PU98szJOaCMloIDKw0zAKZlucNC+qzPyNPAqspgymWv1aUvSnaS4Kg1Q2Lnsop4sePgBrGq29IfjopeknSVMGMg7dcjROC8i54eE5/iumOKe560r3IAo8pT43FNUdndiWYkkniTITGxnXMJIybLwdIsRe7V6mXS/aPvY7u75b503Z/SunSoq5d3y07Kird2st3JqHS+/QWPtOLX0I5R/B7QqUjmpuy63IB0PiNxk5MSroarXZ0Wt0qq4x6aIRTDZiLEmy3A7R48PWDpB0ofC1aZpMTTQMjrfVxpmPjcE+cwmE2p1dTrAtl1OQbgxNzl5DfpCx21BUW2Qb+O+x8PC8j6H3LjgtZNL9zqOGx6V1FRGzI43/ADB75KopOR7I20+FfMmqH4kJ7J7xyPeJ0ro/0ioYmwVsr8UfQjwO4+U5s2Co5XKOzFmmlrpl4qabolkU8JNRBaJ+qht0wVGzRRYukACZWrhc1zbSaPaGG0sJGSgAJaohyZers/KbqJdbCemOxURQfv2H+qQtsbbw+H+Nsza2RO0bj2HDfMPtbpLVrXVP7OmeCntH8TftOmMd0c+Song7DhMRSqX6pkbIxQ5bdkjeJILGcEwG0alBs9J2Ru42v4jjNvsj6QmFlxKBv8aaHzU6Hym9Y2ujj2dGR4OMo8F0qwdTdVCHk4K++6XuGdKgzU3VxzUg/KZNaAk0zJVBY0iR+iJLZSQrLBBBFsZNIhqkbV5IpmYrk1b0Bac4n9KG1+uxTU1PYo9gci+9z66fwztG08YtCjUrN8KIz/yi4HrPM+Ors7s7G7MxZjzJNyfUzpwxzsydEKpENrFtENOsgSp3wkhgbzAggAq0IiKtBAAssfwIBfIdA4KE8s3wnybKfKMGFGBZ4PpBi6HZSu6gfZJzAHlZgbS1odPscn2kb8SD/baZ/HdphUG51Dnln+Fx/OGPgwkeQ8cvlpFq6XTZpsV06xtTeyL+FB/uvKertLE4g5XrMw1JuxCgDUsQLCwFzIQEk1h1alB8Z+M8rG4QHuIubcbDhqTErpITuq7bI1dwT2RZAMqjuHE951J7zGooiFaWQJihBaKUQAdV8g5t7CSMBtCpTYVKbujDcVNifThIL8BzimbhDQHX+g/Tf6yww2KKrWOiPuDn7rcA3LnOhIk8w02IIINiNQRoQeYM9B9AtufXsIrub1kPV1O9lAIb+JSD43nJmjx+5Fy9lxkgjpWFOfyL0VVPFyww+JmaWrJ2HrxNDTIH0o7U6vBikD2qzgH8CdpvfKPOcRqGbb6R9pdbiRTB7NJAv8R7TfoPKYdzO7FOpRnXY2Yhopo3UmxIaHSKURKbhFiJgCCCCAAtBaCCAEqiM9N6f2kPWLu+GwWoo47sjeCNpIoHCPYOoUdGUAsGFgb2a+hU21sQSD3Ey027gRgazUKbZqgF+ssylQSRlUMAVNhq2/laLfOg4K/+5/z+7dT8/v8A5fxfDEtBDjQBQQ4UYBWgJhiJU6wAB3k8oEXiYm1yRHAICFCdK+hbFkYivQv2XpBwP8VNwPlU9pzQTc/RFUttFB96lVX2Df7ZnkW5aGjuPVwSRlgnD4Gnkc6JhvierRnO5QWPkLwmlN0oxGTDleLkL5bz8veVK20gOf7QxBqO7t8TEk+JN5XuY/Wa8jMZ3IzYkxlzHWjDykA+oirQKIcQBQocKAAgggvGAYiqtRnYs7FmNrliSdBYamIvBeIAQQQRgCFBBAAmMSkBMSDpABxP1ijCUWAhwAAmz+iprbTod4qj/wCLn9JjA01P0cVMm0sM3+Jx/NSdfmZNe1gejII11sE4/JD8Wc8YzI9NsRqlPkpY+eg+U1BbWYHpTiM9Z+Qso/h0PveXin7in0Z6oYwY68aM6iBDRpt4jrRkHUSkIkwQrwXkjBeAwrwrxgHBCvBAA4IUOABwQoIACEYIkwAJokcobGJXfAQ9eFmvCAv4fOOQGAEy26NVzTxWHqfdrUz5ZwD7XlTJODfK6tyZT6G8VcoD0h9Z74JTLXgnm8muypdLXJ3DX0nKtoVSzMx3kk+pvOsbY7FKo3JHP+kzkOJM6sJDIjGNmLaIM6CRDRknWOsYw2+NCH80F4gGHeACrwXiYYgAcOFBAA7wXibwXgAq8O8ReC8AFExJMImFeABGHTFyYRMXSGnjGwHBDhCHEMEk4RMzKOJIHqbSNLLYiZq9JedRB/rEVdAdlVIccUQTzzQr+kZth6v4G+U5DiDrOqdIKwOHq/gM5VW3zow9EsjtYC5jLMeAjrd8bZc2/dOkhjRN9+kAw7tqFYjmASPUCOFF4Cb36P8AaFBbUKpC1L2S+itc6AH71za0jJbifJLZpihVWm9HPSpXRgQeRFj6GC09D1tnU6gs6qw5MoI95TYjoHg6naNFV/CWQegIE416+f1Jo3r0rXTOI2hzsH/53g73ytbl1jQqv0d4MjRXXvDn/deX/XYv3/wL+kv8o5BBOm4j6M6Z/u67r3Mqv8rSvrfRrVHwV0b8SMvyJmk+rwv9RD9NkXwYKCafaHQjFUUeoxplEUsxVmvlUXOhWZw0T3es2nJNLcvZlUVPFLQ1CjvUN3esLqG7vUS9kjUEd+rt3esP6ueY94bAYaXOxdiviEqVActOkl2YjQt9lBzJ9pWpRGYZj2bjNl32vra+l7Tc4zpfQFJKeFoOoRSERygRWK2FRgpJqMNbA2F7k3NrZ231KNMcz3TMRltxvAYC5158b8YLyyACX/RCiXxVLkpLn+FSR72lAJuPo+wl2qViPhAQeLHM3sF9ZGR6liXLOhKYcagnHovZR7WW9CoP8DewvOY1zadVqoHVkP2lK+otOUYoEMQd4JHpNsHygYw0SYZMTedJIcLxgvBADoPRTp3ktSxZLLoFq7yByccfxevOdLw+KWogamwKMAQQbgg8QRPOctNk7fxOE0oVCqXuUNmQnwO7ytOLN6Sae54f+joj1DXFcnfbX0iWnLsN9IDOMtcFG+8uqn9RLvAdJkf4XDDxvOOvS2uzqnJNdM2WXlC6uUtHa95MTHg8Zi8TRutjHSWn/wBpiAN/UVfyNOHGds25iR9XrE7hSqHyyNecRDz0fRLUv+Th9X7kKibwZoV53HIKzQi0TAYAAmC8KHAAoV4cEBC6YnWujWC6jDIhFnYZ3/E+tj4Cw8pzno3gOurohF0BzP8AhXUg+Og851RnuZzZq6k0ifkmKYI2rQploZXicv23/wCRV/zH/MYUE0w+5iror2iYIJ1GYcEEEAQcAggiGKjFY5Wuuh7tIcEaBm76N1WIW5J04kmavDwQTzcvuZ6mH2oa6Q/+LiP8p/ymcdggnT6T2v8Ak5fV+5ChFGCCdJyIMQQQQGEYDBBAQIQgggBsugH95V/Cn5hNvxggnJl9xtHtJEEEEkR//9k=",
        name: "Kafka Eduardo",
        profession: "Advogada",
        birth: "18/09/2002",
        phone: "(88) 98832-3240",
        email: "kafka@gmail.com",
    }
    {
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZv1X5qSRodG4nq-OPHx-j8Cqn_hhx50_Dg&usqp=CAU",
        name: "Hallyd Karinne",
        profession: "Fioterapeuta",
        birth: "26/02/2003",
        phone: "(88) 99926-4664",
        email: "hallyd@hotmail.com",
    }
];

const image = document.querySelector("img")
const nome = document.querySelector("#nome");
const profissao = document.querySelector("#profissao");
const nascimento = document.querySelector("#nascimento");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");

let choit = 0

function changePerfil (indice) {


    nome.innerText = candidatos[indice].name
    profissao.innerText = candidatos[indice].profissao
    nascimento.innerText = candidatos[indice].birth
    telefone.innerText = candidatos[indice].phone
    email.innerText = candidatos[indice].email
}

function nextPerfil () {
    if(choice === candidatos.length - 1) {
        choice = 0
} else {
    choice++
}
changePerfil(choice)
}

function beforePerfil() {
    if (choice === 0) {
        choice = 2
    } else {
        choice--
    }
       changePerfil(choice)
}