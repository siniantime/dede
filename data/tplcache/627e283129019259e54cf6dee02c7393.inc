<li class="mainlevel">
            <a class="nav nav_02" href='{dede:field name='typeurl'/}'>{dede:field name='typename'/}</a>
            <ul class="sv hide">
              {dede:channel type='son' noself='yes'}
              <li><a href="[field:typelink/]">[field:typename/]</a> </li>
              {/dede:channel}
            </ul>
          </li>