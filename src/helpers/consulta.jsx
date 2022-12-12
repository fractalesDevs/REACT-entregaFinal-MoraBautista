let prod = [
    {id:'ma01',nombre:'Maceta 1', clas:'macetas',piezas:'5',precio:'150',img:'https://cdn.shopify.com/s/files/1/0596/9559/5675/products/42635_2_5000x.jpg?v=1663698313'},
    {id:'ma02',nombre:'Maceta 2', clas:'macetas',piezas:'5',precio:'170',img:'https://resources.claroshop.com/medios-plazavip/mkt/60e4a0947d3bd_teu_chicajpg.jpg?scale=340'
    },
    {id:'ma03',nombre:'Maceta 3', clas:'macetas',piezas:'5',precio:'120',img:'https://m.media-amazon.com/images/I/71GgLeTeizL._AC_SX466_.jpg'
    },
    {id:'llav01',nombre:'Llavero 1', clas:'llaveros',piezas:'100',precio:'50',img:'https://cdn.shopify.com/s/files/1/0604/7016/5763/products/LLAVERO-DE-PIEL-CAFE_1200x1200.jpg?v=1635186527'
    },
    {id:'llav02',nombre:'Llavero 2', clas:'llaveros',piezas:'200',precio:'80',img:'https://m.media-amazon.com/images/I/61tyXepW9zS._SL1440_.jpg'
    },
    {id:'mad01',nombre:'Tabla de picar', clas:'madera',piezas:'5',precio:'500',img:'https://m.media-amazon.com/images/I/61cGmudKxTS._AC_SL1500_.jpg'
    },
    {id:'mad02',nombre:'Porta huevos', clas:'madera',piezas:'7',precio:'800',img:'https://http2.mlstatic.com/D_NQ_NP_986017-MLM48795241087_012022-O.webp'
    },
    {id:'mad03',nombre:'Porta Rollos', clas:'madera',piezas:'10',precio:'1500',img:'https://http2.mlstatic.com/D_NQ_NP_675191-MLM32152463127_092019-O.jpg'
    }
    
    ]
    
    const consulta = (id) => {
      return new Promise( (bien,mal)=>{
        // Promesas -> 3 estados: pendiente, rechazado, aceptada
        //acciones
        setTimeout(() => {
          bien(id ? prod.find(producto => producto.id === id) : prod)
          //mal('Todo mal!! Bitches!!')
        },1000)
    }
    )}

    export default consulta;