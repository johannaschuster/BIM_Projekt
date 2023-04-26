export function createTable(){

tab = "<table>"; //hier wird die tabelle göffnet

for(i=0;i<10;i++)
{
tab = tab + "<tr>";

for(ii=0;ii<10;ii++){
tab = tab + "<td>a</td>";
}
tab = tab + "</tr>";
}

tab = tab + "</table>";
document.write(tab);