import { ChangeDetectionStrategy, Component } from '@angular/core'
import { DestroyService } from './services/destroy.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class AppComponent {
  constructor(private readonly destroyService: DestroyService) {}
}
