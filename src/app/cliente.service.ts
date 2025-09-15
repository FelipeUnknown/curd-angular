import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  salvar(cliente: Cliente){
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
    
  }
  
  obterStorage() : Cliente[] {
    const repositorioClietes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repositorioClietes){
      const clientes: Cliente[] = JSON.parse(repositorioClietes);
      return clientes;
    }
    const clientes : Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    
    return clientes;
  }

}

