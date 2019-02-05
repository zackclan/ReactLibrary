import React, { Component } from 'react';
import './App.css';

class Book extends Component {
  render() {
    return (
      this.props.books.map((book,index) => {
        return (
        <div class="example-book">
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.pages}</p>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={book.isRead}
          onChange={() => this.props.onChange(index)}/>
          <label class="form-check-label" for="defaultCheck1">
            Read
          </label>
          </div>
          <button type="button"class="btn btn-danger deletebutton" onClick={() => this.props.onClick(index)}>x</button>
        </div>
        )
      })
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      myLibrary:[{
        title:"A Game of Thrones",
        author:"George R.R. Martin",
        pages:"756",
        isRead:true,
      }],
      value:{
        pages:"",
        title:"",
        author:'',
        isRead:false,
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.addBook = this.addBook.bind(this)
  }

  handleChange(event){
    const target = event.target
    const name = target.name
    const fieldValue = target.type === 'checkbox' ? target.checked : target.value
    let value = {...this.state.value}
    value[name] = fieldValue
    this.setState({value})

  }
  handleIsRead(index){
    let library = [...this.state.myLibrary]
    library[index].isRead = library[index].isRead? false : true;
    this.setState({myLibrary:library})
  }

  deleteEntry(index){
    let library = [...this.state.myLibrary]
    library.splice(index,1)
    this.setState({myLibrary:library})
  }

  addBook(event){
    this.setState({myLibrary:[...this.state.myLibrary,this.state.value]})
    this.setState({
      value:{
        pages:'',
        title:'',
        author:'',
        isRead:false,
      }
    })
    event.preventDefault();
  }

  
  render() {
    return (
      <div>
        <div class="header">
        <p>Library</p>
      </div>
        <div class="alert alert-success hidden" role="alert">
          Your book has been added successfully!
        </div>
        <div class="library">
          <div class="top">
            <button class="btn btn-primary dropdown-toggle" type="button" id="bookform" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Add a book
                </button>
            <form onSubmit={this.addBook} class="dropdown-menu addform" aria-labelledby="bookform">
              <div class="form-row">
                <div class="col">
                  <input name="title" type="text" class="form-control title" placeholder="Title" value={this.state.value.title} onChange={this.handleChange}/>
                        </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-9">
                  <input name="author" type="text" class="form-control author" placeholder="Author" value={this.state.value.author} onChange={this.handleChange}/>
                        </div>
                    <div class="form-group col-md-3">
                      <input name="pages" type="text" class="form-control pages" placeholder="Pages" value={this.state.value.pages} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div class="form-group checkbox">
                      <div class="form-check">
                        <input name ="isRead"class="form-check-input checkread" type="checkbox" id="gridCheck" checked={this.state.isRead} onChange={this.handleChange}/>
                          <label class="form-check-label" for="gridCheck">
                            Read
                            </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary addbook">Add Book</button>
                </form>
                </div>
                <Book
                  onChange = {(i) => this.handleIsRead(i)}
                  books={this.state.myLibrary}
                  onClick = {(i) => this.deleteEntry(i)}
                />
              </div>
                
              </div>
    )
  }
}

export default App;
