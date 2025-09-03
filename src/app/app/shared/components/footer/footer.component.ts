import { Component } from '@angular/core';
import { AiAssistantRoutingModule } from "../../../features/ai-assistant/ai-assistant/ai-assistant-routing.module";

@Component({
  selector: 'app-footer',
  imports: [AiAssistantRoutingModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
