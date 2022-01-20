// import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/style.css';

const adicionarButton: HTMLElement = document.querySelector('#adicionarItem');
const inputValue: HTMLInputElement = document.querySelector('#inputItem');
const listaItens: HTMLElement = document.querySelector('#listaItens');
const listaItensChecked: HTMLElement = document.querySelector('#listaItensChecked');

const criarItem = (event: any)=>
{
    event.preventDefault();
    const item: HTMLElement = document.createElement('li');
    const itemValue: string = `<p class='content'>${inputValue.value}</p>`;
    
    item.innerHTML = itemValue;
    item.appendChild(criarButtonCheck(event));
    item.appendChild(criarButtonDelete(event));
    listaItens.appendChild(item);
    inputValue.value = null;
    inputValue.focus();
};

const criarButtonCheck = (event: any)=>
{
    event.preventDefault();
    const buttonCheck: HTMLButtonElement = document.createElement('button');
    buttonCheck.id = "checkButton";
    buttonCheck.innerText = "CHECK/UNCHECK";

    buttonCheck.addEventListener('click', checkUncheckItem);

    return buttonCheck;
};
const checkUncheckItem = (event: any)=>
{
    event.preventDefault();

    const checkButton: HTMLButtonElement = event.target;
    const item: HTMLElement = checkButton.parentElement;
    if(item.parentElement.id == "listaItens")
    {
        listaItensChecked.appendChild(item);
    }
    else
    {
        listaItens.appendChild(item);
    }
};
const criarButtonDelete = (event: any):HTMLButtonElement =>
{
    event.preventDefault();

    const deleteButton: HTMLButtonElement = document.createElement('button');
    deleteButton.id = "deleteButton";
    deleteButton.innerText = "DELETE";    
    deleteButton.addEventListener('click', deleteItem);

    return deleteButton;
};

const deleteItem = (event: any)=>
{
    event.preventDefault();

    const deleteButton: HTMLButtonElement = event.target;
    const item: HTMLElement = deleteButton.parentElement;
    item.remove();

}
adicionarButton.addEventListener('click', criarItem);