import { Component } from '@angular/core';
import { CreditoService } from '../../service/credito.service';
import { Credito } from '../../model/credito.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent {

  creditos: Credito[] = [];
  numeroBusca = '';
  tipoBusca: 'nfse' | 'credito' = 'nfse';

  constructor(private service: CreditoService) {}

  buscar() {
    console.log('Iniciando busca...');
    console.log('Tipo de busca:', this.tipoBusca);
    console.log('Número de busca:', this.numeroBusca);
    
  
    if (this.tipoBusca === 'nfse') {
      this.service.buscarPorNfse(this.numeroBusca).subscribe(
        res => {
          console.log('Resultado da busca por NFS-e:', res);
          this.creditos = res;
        },
        error => console.error('Erro ao buscar por NFS-e:', error)
      );
    } else {
      this.service.buscarPorNumeroCredito(this.numeroBusca).subscribe(
        res => {
          console.log('Resultado da busca por número de crédito:', res);
          if (Array.isArray(res)) {
            this.creditos = res;
          } else {
            this.creditos = [res];
          }
        },
        error => console.error('Erro ao buscar por número de crédito:', error)
      );
    }
  }
}