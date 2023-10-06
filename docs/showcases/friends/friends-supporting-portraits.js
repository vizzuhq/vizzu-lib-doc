const filelist = [
  'Carol Willick.png',
  'Charlie Wheeler.png',
  'Frank Buffay Jr.png',
  'Janice L. Goralnik.png',
  'Judy Geller.png',
  'Mike Hannigan.png',
  'Richard Burke.png',
  'Emily Waltham.png',
  'Jack Geller.png',
  'Tag Jones.png',
  'Gunther.png',
  'David.png',
  'Paul Stevens.png',
  'Susan Bunch.png',
  'Joshua Burgin.png',
  'Peter Becker.png',
  'Gary.png',
  'Kathy.png',
  'Leonard Green.png',
  'Sandra Green.png',
  'Joanna.png',
  'Eddie Menuek.png',
  'Kate Miller.png',
  'Mark Robinson.png',
  'Julie.png',
  'Nora Tyler Bing.png',
  'Barry Farber.png',
  'Mr. Heckles.png',
  'Sandy.png',
  'Bobby Rush.png',
  'Mindy Hunter.png',
  'Roger.png',
  'Joey Tribbiani Sr.png',
  'Ursula.png',
  'Terry.png',
  'Paolo.png',
  'Nurse Sizemore.png',
  'Leslie.png'
]

export class Portraits {
  constructor() {
    this.loaded = 0
    this.cnt = filelist.length
    this.imgs = new Map()
    for (let file of filelist) {
      let img = new Image()
      img.onload = () => {
        this.loaded++
        if (this.loaded == this.cnt) console.log('portraits loaded')
      }
      img.src = 'portraits/' + file
      this.imgs.set(file, img)
    }
  }

  getByName(name) {
    if (this.loaded < this.cnt) return undefined
    let file = name + (name.slice(-1) == '.' ? 'png' : '.png')
    return this.imgs.has(file) ? this.imgs.get(file) : undefined
  }
}
