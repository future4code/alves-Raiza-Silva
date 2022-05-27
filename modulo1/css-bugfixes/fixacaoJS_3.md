function calculaNota(ex, p1, p2) {
 let gradeEscola = ((ex*1)+(p1*2)+(p2*3)) /6

if(gradeEscola >=9){
  return "A"
}else if(gradeEscola<9, gradeEscola>=7.5){
  return "B"
}else if(gradeEscola<7.5, gradeEscola>=6){
  return "C"
  
}else {
  return "D"
}
  
}