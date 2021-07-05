import book from '@/assets/imgs/book.png'
import bookActive from '@/assets/imgs/book-active.png'
import remark from '@/assets/imgs/remark.png'
import remarkActive from '@/assets/imgs/remark-active.png'
import life from '@/assets/imgs/life.png'
import lifeActive from '@/assets/imgs/life-active.png'
import music from '@/assets/imgs/music.png'
import musicActive from '@/assets/imgs/music-active.png'
export const leftBarArr = [
  {
    title: '兰亭序',
    name: 'lanting',
    className: 'book',
    imgUrl: book,
    imgUrlActive: bookActive,
    url: '/lanting/index',
    active: true
  },
  {
    title: '本草纲目',
    name: 'materia-medica',
    className: 'remark',
    imgUrl: remark,
    imgUrlActive: remarkActive,
    url: '/materia-medica/index',
    active: false
  },
  {
    title: '说走就走',
    name: 'gogogo',
    className: 'life',
    imgUrl: life,
    imgUrlActive: lifeActive,
    url: '/gogogo/index',
    active: false
  },
  {
    title: '夜曲',
    name: 'nocturne',
    className: 'music',
    imgUrl: music,
    imgUrlActive: musicActive,
    url: '/nocturne/index',
    active: false
  }
]
