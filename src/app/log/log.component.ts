import { Component, OnInit } from "@angular/core";
import { ServicoService } from "../servico.service";

@Component({
  selector: "app-log",
  providers: [ServicoService],
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.css"]
})
export class LogComponent implements OnInit {
  constructor(private servico: ServicoService) {}
  ngOnInit() {
    this.servico.reset();
  }
}
