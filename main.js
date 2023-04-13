//Assign function to variables
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//Bắt các element trong web html
const btnSuccess = $('.btn--success');
const btnWarning = $('.btn--warning');
const btnError = $('.btn--error');
//Tạo một đối tượng app
const app = {
    messages : [
        {
            type: "success",
            title: "Success",
            content: "Bạn đã đăng ký thành công tài khoản, hãy đăng nhập và tận hưởng niềm vui nhé!",
            icon: "fa-solid fa-thumbs-up",
            
        },
        {
            type: "warning",
            title: "Warning",
            content: "Tên tài khoản hoặc mật khẩu không đúng, xin mời nhập lại!",
            icon: "fa-solid fa-triangle-exclamation",
            
        },
        {
            type: "error",
            title: "Error",
            content: "Đã có lỗi xảy ra!!!",
            icon: "fa-solid fa-bug",
            
        }
    ],
    // Define Properties
    defineProperties: function(){
        Object.defineProperty(this, "currentMessage", {
            get: function(){
                return this.messages[this.currentIndex];
            }
        })
    }
    ,
    handleBtn : function(){
        _this = this;
        //Click vào nút Success
        btnSuccess.onclick = function(){
            _this.currentIndex = 0;
            const value = _this.currentMessage;
            _this.showMessage(value);
        };
        // click vào nút Warning
        btnWarning.onclick = function(){
            _this.currentIndex = 1;
            const value = _this.currentMessage;
            _this.showMessage(value);
        };
        // click vào nút Error
        btnError.onclick = function(){
            _this.currentIndex = 2;
            const value = _this.currentMessage;
            _this.showMessage(value);
        };
    }
    ,
    showMessage: function(object){
        const main = $('.message');
        if(main){
            const newDiv = document.createElement('div');
            newDiv.classList.add('toast',`toast--${object.type}`);
            newDiv.style.animation = 'fadeIn linear .5s, fadeOut linear 1s 3s forwards';
            newDiv.innerHTML = `
            <i class="toast__icon--${object.type} ${object.icon}"></i>
            <div class="toast__body">
                <div class="toast__body--title">${object.title}</div>
                <div class="toast__body--content">${object.content}</div>
            </div>
            <i class="toast__icon--close fa-solid fa-xmark"></i>
            `;
            main.appendChild(newDiv);
            const autoRemove = setTimeout(function() {
                main.removeChild(newDiv);
            }, 4500);

            newDiv.onclick = function(e) {
                const closeBtn = e.target.closest('.toast__icon--close');
                if(closeBtn){
                    main.removeChild(newDiv);
                    clearTimeout(autoRemove);
                }
            };
        }
        
    },
    start: function(){
        this.handleBtn();
        this.defineProperties();
    }
}
app.start();