<li class="mainlevel">
        <a href="{dede:field name='typeurl'/}" class="nav nav_02" target="_blank">{dede:field name='typename'/}</a>
          <ul class="sv hide">
            {dede:channel type='son' noself='yes'}
              <li><a href="[field:typelink/]">[field:typename/]</a> </li>
              {/dede:channel}
          </ul>
        </li>