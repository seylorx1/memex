function PageTitle()
{
  this.container = null;

  this.install = function(container)
  {
    this.container = container;
  }

  this.display = function()
  {
    let titleContent = ``;
    titleContent += `<div class="pagetitle">`;
    titleContent += `<table>`;
    titleContent += `<tr>`;

    titleContent += `<td>Seylor's Webzone. ~(o_o)~</td>`;

    titleContent += `<td><table class="pagetitle-line"><tr><td></td></tr></table></td>`;

    titleContent += `</tr>`;

    titleContent += `<tr><td><a class="pagetitle-link" href="https://github.com/kormyen/memex">Powered by Memex.</a></td></tr>`;
    titleContent += `</table>`;
    titleContent += `</div>`;
    this.container.innerHTML = titleContent;
  }
}