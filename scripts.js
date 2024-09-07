<script>
        document.querySelectorAll('.header-nav a').forEach(link = {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

                // Xóa nội dung hiện tại
                document.getElementById('content').innerHTML = '<p>Đang tải...</p>';

                // Lấy giá trị thuộc tính data-content
                const contentId = this.getAttribute('data-content');

                // Tạo yêu cầu AJAX
                fetch(`content/${contentId}.html`)
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById('content').innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Có lỗi xảy ra:', error);
                        document.getElementById('content').innerHTML = '<p>Không thể tải nội dung.</p>';
                    });
            })
        });
    </script>