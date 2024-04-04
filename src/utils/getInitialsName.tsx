export function getInitialName(fullname: string){
  return fullname?.split(' ').map(name=> name[0]).join('')
}