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
      },{
        title:"The Fellowship of the Rings",
        author:"J.R.R. Tolkien",
        pages:"621",
        isRead:false,
      },{
        title:"Foundation",
        author:"Isaac Asimov",
        pages:"421",
        isRead:true,
      }],
      value:{
        pages:"",
        title:"",
        author:'',
        isRead:false,
      },
    }
    this.loadName = React.createRef();
    this.name = React.createRef();
    this.handleChange = this.handleChange.bind(this)
    this.addBook = this.addBook.bind(this)
    this.saveLibrary = this.saveLibrary.bind(this)
    this.loadLibrary = this.loadLibrary.bind(this)
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

  loadLibrary(event) {
    event.preventDefault();
    fetch(`https://fast-ridge-91555.herokuapp.com/library/${this.loadName.current.value}`, {
    method:'GET',
    }).then(res => {
      return res.json()
    }).then((data) => {
      this.setState({myLibrary: data.library})
    })
    .catch(e => {
        console.log(e)
    })
  }

  saveLibrary(event) {
    event.preventDefault()
    fetch(`https://fast-ridge-91555.herokuapp.com/library/${this.name.current.value}`, {
      method:'DELETE',
    }).then(() => {
      this.state.myLibrary.map(x => {
        fetch('https://fast-ridge-91555.herokuapp.com/library', {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            title: x.title,
            author: x.author,
            pages: x.pages,
            isRead: x.isRead,
            _creator: this.name.current.value,
          })

        }).then(res => res.json())
          .then(response => console.log('success:', JSON.stringify(response)))
          .catch(e => console.log(e))
      })
    })
    
    
  }
  handleFormSubmit(e) {
    e.preventDefault()
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
            <button class="save-library btn btn-primary" data-toggle="modal" data-target="#save-modal">Save Library</button>
            <div class="modal fade" id="save-modal" tabindex="-1" role="dialog" aria-labelledby="saveModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Enter name you'd like to save library as</h5>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={this.handleFormSubmit}>
                      <div class="form-group">
                        <input type="text" class="form-control" id="save-name" ref={this.name}/>
                      </div>
                      <div onClick={this.saveLibrary}class="btn btn-primary" type="submit" data-dismiss="modal" id="hidePopUpBtn">Save</div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <button class="load-library btn btn-primary" data-toggle="modal" data-target="#load-modal">Load Library</button>
            <div class="modal fade" id="load-modal" tabindex="-1" role="dialog" aria-labelledby="loadModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Enter name of saved library</h5>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={this.handleFormSubmit}>
                      <div class="form-group">
                        <input type="text" class="form-control" id="save-name" ref={this.loadName} />
                      </div>
                      <div onClick={this.loadLibrary} class="btn btn-primary" type="submit" data-dismiss="modal" id="hidePopUpBtn">Load</div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
