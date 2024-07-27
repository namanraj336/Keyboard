let insert = document.querySelector('#insert')
document.addEventListener('keydown',function(e){
    insert.innerHTML= `<table>
    <tr>
      <th>Key</th>
      <th>Code</th>
      <th>KeyCode</th>
    </tr>
    <tr>
      <td>${e.key === ' '?'space' : e.key}</td>
      <td>${e.code}</td>
      <td>${e.keyCode}</td>
    </tr>
  </table>` 
}) 