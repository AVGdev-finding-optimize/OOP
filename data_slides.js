// Dữ liệu Slide ôn tập
const SLIDE_DATA = [
// --- CHUYÊN ĐỀ 1: TỔNG QUAN ---
    {
        id: "slide_1",
        title: "1. Tổng quan về OOP",
        content: `
            <h2 class="slide-title">Tư duy Lập trình Hướng đối tượng</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Tại sao cần OOP? (Programming Paradigms)</span>
                <p>Trước khi có OOP, chúng ta có:</p>
                <ul>
                    <li><b>Unstructured Programming (Phi cấu trúc):</b> Code viết liền mạch, khó quản lý (VD: Assembly, Basic).</li>
                    <li><b>Structured/Procedural (Thủ tục):</b> Chia nhỏ thành các hàm (function). Tốt, nhưng dữ liệu và hàm tách biệt nhau (VD: Pascal, C).</li>
                    <li><b>OOP (Hướng đối tượng):</b> Gom nhóm <b>Dữ liệu (Fields)</b> và <b>Hành vi (Methods)</b> vào một thực thể duy nhất gọi là <b>Đối tượng (Object)</b>. Giúp mô phỏng thế giới thực tốt hơn.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Class & Object (Lớp & Đối tượng)</span>
                <p>Đây là hai khái niệm cốt lõi nhất. Hãy tưởng tượng:</p>
                <table style="width:100%; border-collapse: collapse; margin-top:10px; font-size:0.95rem;">
                    <tr style="background:#e0f2fe;">
                        <th style="padding:8px; border:1px solid #ccc;">Class (Lớp)</th>
                        <th style="padding:8px; border:1px solid #ccc;">Object (Đối tượng)</th>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ccc;">Là bản thiết kế (Blueprint) hoặc khuôn mẫu.</td>
                        <td style="padding:8px; border:1px solid #ccc;">Là thể hiện cụ thể (Instance) được tạo ra từ Class.</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ccc;">Là một <b>Kiểu dữ liệu</b> (Data Type).</td>
                        <td style="padding:8px; border:1px solid #ccc;">Là một <b>Biến</b> (Variable) cụ thể trong bộ nhớ.</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid #ccc;"><i>Ví dụ:</i> Bản vẽ thiết kế xe hơi.</td>
                        <td style="padding:8px; border:1px solid #ccc;"><i>Ví dụ:</i> Chiếc xe Mercedes biển số 30A-123.45 ngoài đời thực.</td>
                    </tr>
                </table>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Cấu tạo của một Class</span>
                <p>Một Class bao gồm 2 thành phần chính:</p>
                <ul>
                    <li><b>Fields (Thuộc tính/Trường):</b> Chứa dữ liệu mô tả trạng thái của đối tượng. (VD: <code>name</code>, <code>color</code>, <code>speed</code>).</li>
                    <li><b>Methods (Phương thức/Hành vi):</b> Các hàm thực hiện hành động xử lý dữ liệu đó. (VD: <code>move()</code>, <code>attack()</code>).</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Ví dụ Minh họa (Pokemon Game)</span>
                <p>Mô hình hóa một con Pokemon trong Java:</p>
                <div class="code-box">
<pre>
<span class="kwd">class</span> <span class="typ">Pokemon</span> {
    <span class="com">// 1. Fields (Dữ liệu)</span>
    <span class="typ">String</span> name;
    <span class="typ">String</span> type;
    <span class="kwd">int</span> health;

    <span class="com">// 2. Methods (Hành vi)</span>
    <span class="kwd">void</span> attack(<span class="typ">Pokemon</span> enemy) {
        enemy.health = enemy.health - 10;
        <span class="typ">System</span>.out.println(this.name + " tấn công!");
    }

    <span class="kwd">boolean</span> dodge() {
        <span class="kwd">return</span> <span class="typ">Math</span>.random() > 0.5;
    }
}

<span class="com">// Sử dụng (Tạo Object từ Class)</span>
<span class="kwd">public static void</span> main(<span class="typ">String</span>[] args) {
    <span class="typ">Pokemon</span> p1 = <span class="kwd">new</span> <span class="typ">Pokemon</span>(); <span class="com">// Tạo đối tượng p1</span>
    p1.name = "Pikachu";
    p1.type = "Electric";
    
    <span class="typ">Pokemon</span> p2 = <span class="kwd">new</span> <span class="typ">Pokemon</span>(); <span class="com">// Tạo đối tượng p2</span>
    p2.name = "Charmander";
    
    <span class="com">// Gọi hành vi</span>
    p1.attack(p2);
}
</pre>
                </div>
            </div>
            
            <div class="concept-block">
                <span class="concept-title">5. Quy tắc đặt tên (Naming Convention)</span>
                <ul>
                    <li><b>Class:</b> Viết hoa chữ cái đầu mỗi từ (PascalCase). VD: <code>Car</code>, <code>StudentManager</code>.</li>
                    <li><b>Method & Variable:</b> Viết thường chữ cái đầu, viết hoa chữ cái các từ sau (camelCase). VD: <code>studentName</code>, <code>calculateScore()</code>.</li>
                </ul>
            </div>
        `
    },
    // --- CHUYÊN ĐỀ 2: JAVA CƠ BẢN ---
    {
        id: "slide_2",
        title: "2. Nhập môn Java & Bộ nhớ",
        content: `
            <h2 class="slide-title">Nền tảng Java & Quản lý dữ liệu</h2>

            <div class="concept-block">
                <span class="concept-title">1. Kiến trúc Java (WORA - Write Once, Run Anywhere)</span>
                <p>Quy trình chạy code Java: <i>Source Code (.java) -> Compiler -> Bytecode (.class) -> JVM -> Machine Code</i>.</p>
                <table class="compare-table">
                    <tr>
                        <th>Thành phần</th>
                        <th>Chức năng</th>
                    </tr>
                    <tr>
                        <td><b>JDK</b> (Development Kit)</td>
                        <td>Bộ công cụ dành cho lập trình viên. Chứa trình biên dịch (<code>javac</code>), JRE và các công cụ debug.</td>
                    </tr>
                    <tr>
                        <td><b>JRE</b> (Runtime Environment)</td>
                        <td>Môi trường để chạy ứng dụng Java. Chứa thư viện chuẩn và JVM.</td>
                    </tr>
                    <tr>
                        <td><b>JVM</b> (Virtual Machine)</td>
                        <td>Máy ảo Java. Trực tiếp thực thi Bytecode. Đây là thành phần giúp Java chạy đa nền tảng.</td>
                    </tr>
                </table>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Phân loại Kiểu dữ liệu (Data Types)</span>
                <p>Java chia dữ liệu làm 2 loại chính. Sự khác biệt nằm ở nơi chúng được lưu trữ trong bộ nhớ.</p>
                
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:10px;">
                    <div style="background:#fff; padding:10px; border:1px solid #ccc; border-radius:5px;">
                        <b style="color:var(--primary)">a. Primitive Types (Nguyên thủy)</b>
                        <ul>
                            <li>Gồm 8 kiểu: <code>byte, short, int, long, float, double, boolean, char</code>.</li>
                            <li>Chứa <b>giá trị thực sự</b>.</li>
                            <li>Lưu trữ trên <b>Stack</b>.</li>
                            <li>Hiệu năng cao, không phải là Object.</li>
                        </ul>
                    </div>
                    <div style="background:#fff; padding:10px; border:1px solid #ccc; border-radius:5px;">
                        <b style="color:var(--primary)">b. Reference Types (Tham chiếu)</b>
                        <ul>
                            <li>Gồm: Class, Interface, Array, String.</li>
                            <li>Chứa <b>địa chỉ vùng nhớ</b> (tham chiếu).</li>
                            <li>Biến nằm trên Stack, nhưng dữ liệu thực nằm trên <b>Heap</b>.</li>
                            <li>Mặc định là <code>null</code> nếu chưa khởi tạo.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Stack vs Heap (Quản lý bộ nhớ)</span>
                <p>Đây là phần quan trọng để hiểu về hiệu năng và lỗi <code>NullPointerException</code>.</p>
                <div class="code-box">
<pre>
<span class="kwd">public void</span> method() {
    <span class="kwd">int</span> x = 10;                  <span class="com">// 1. x lưu trực tiếp giá trị 10 trên Stack</span>
    <span class="typ">Dog</span> myDog = <span class="kwd">new</span> <span class="typ">Dog</span>();       <span class="com">// 2. myDog (Stack) lưu địa chỉ -> Object Dog (Heap)</span>
    <span class="typ">Dog</span> sameDog = myDog;         <span class="com">// 3. sameDog trỏ cùng địa chỉ với myDog</span>
}
</pre>
                </div>
                <ul>
                    <li><b>Stack:</b> Lưu biến cục bộ, thực thi hàm. Dữ liệu mất ngay khi hàm kết thúc. Truy xuất rất nhanh.</li>
                    <li><b>Heap:</b> Lưu tất cả các Object được tạo bằng từ khóa <code>new</code>. Dữ liệu tồn tại đến khi bộ dọn rác (GC) quét đi.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Garbage Collection (GC)</span>
                <p>Cơ chế tự động giải phóng bộ nhớ của Java (khác với C++ phải delete thủ công).</p>
                <ul>
                    <li><b>Khi nào kích hoạt?</b> Khi Heap đầy hoặc CPU rảnh (không thể ép buộc chạy ngay lập tức, chỉ có thể gợi ý bằng <code>System.gc()</code>).</li>
                    <li><b>Đối tượng nào bị xóa?</b> Các đối tượng "Unreachable" (Không còn biến tham chiếu nào trỏ tới nó).</li>
                    <li><b>Phương thức finalize():</b> Được GC gọi trước khi hủy đối tượng (tuy nhiên không nên phụ thuộc vào hàm này).</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">5. Nhập liệu (Input Scanner)</span>
                <p>Sử dụng lớp <code>java.util.Scanner</code> để nhận dữ liệu từ bàn phím.</p>
                <div class="code-box">
<pre>
<span class="typ">Scanner</span> sc = <span class="kwd">new</span> <span class="typ">Scanner</span>(<span class="typ">System</span>.in);

<span class="typ">System</span>.out.print("Nhập tên: ");
<span class="typ">String</span> name = sc.nextLine(); <span class="com">// Đọc cả dòng chuỗi</span>

<span class="typ">System</span>.out.print("Nhập tuổi: ");
<span class="kwd">int</span> age = sc.nextInt();      <span class="com">// Đọc số nguyên</span>
</pre>
                </div>
            </div>
        `
    },
// --- CHUYÊN ĐỀ 3: JAVA NÂNG CAO 1 ---
    {
        id: "slide_3",
        title: "3. Static, Final & Packages",
        content: `
            <h2 class="slide-title">Từ khóa & Cấu trúc nâng cao</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Từ khóa Static (Tĩnh)</span>
                <p>Thành phần <code>static</code> thuộc về <b>Lớp (Class)</b> chứ không thuộc về một đối tượng cụ thể. Nó được chia sẻ chung cho tất cả các đối tượng.</p>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <div>
                        <b>Biến Static:</b>
                        <ul>
                            <li>Dùng làm biến chung (VD: đếm số lượng sinh viên).</li>
                            <li>Được khởi tạo 1 lần duy nhất khi nạp Class.</li>
                        </ul>
                    </div>
                    <div>
                        <b>Phương thức Static:</b>
                        <ul>
                            <li>Gọi trực tiếp qua tên lớp: <code>ClassName.method()</code>.</li>
                            <li>Không thể truy cập biến non-static (instance variable).</li>
                            <li>Thường dùng cho các hàm tiện ích (VD: <code>Math.sqrt()</code>).</li>
                        </ul>
                    </div>
                </div>
                <div class="code-box">
<pre>
<span class="kwd">class</span> <span class="typ">Student</span> {
    <span class="kwd">static int</span> count = 0; <span class="com">// Biến chung</span>
    
    <span class="typ">Student</span>() {
        count++; <span class="com">// Tăng lên mỗi khi tạo mới đối tượng</span>
    }
}
<span class="com">// Student.count sẽ tăng dần bất kể tạo bao nhiêu object</span>
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Từ khóa Final (Cuối cùng)</span>
                <p>Dùng để áp đặt tính "bất biến" (immutability) hoặc "ngăn chặn thay đổi". Ý nghĩa thay đổi tùy ngữ cảnh:</p>
                <table class="compare-table">
                    <tr>
                        <th>Ngữ cảnh</th>
                        <th>Ý nghĩa</th>
                        <th>Ví dụ</th>
                    </tr>
                    <tr>
                        <td><b>Biến</b> (Variable)</td>
                        <td>Trở thành <b>Hằng số</b> (Constant). Giá trị không thể thay đổi sau khi khởi tạo.</td>
                        <td><code>final double PI = 3.14;</code></td>
                    </tr>
                    <tr>
                        <td><b>Phương thức</b> (Method)</td>
                        <td>Ngăn chặn <b>Ghi đè</b> (Override). Lớp con không thể sửa đổi logic hàm này.</td>
                        <td><code>public final void login() {...}</code></td>
                    </tr>
                    <tr>
                        <td><b>Lớp</b> (Class)</td>
                        <td>Ngăn chặn <b>Kế thừa</b> (Inheritance). Không lớp nào có thể extends nó.</td>
                        <td><code>public final class String {...}</code></td>
                    </tr>
                </table>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Packages (Gói)</span>
                <ul>
                    <li><b>Mục đích:</b> Gom nhóm các class liên quan, tránh xung đột tên và kiểm soát truy cập (Access Modifiers).</li>
                    <li><b>Built-in Packages:</b>
                        <ul>
                            <li><code>java.lang</code>: Mặc định (String, System, Math...).</li>
                            <li><code>java.util</code>: Cấu trúc dữ liệu (List, Scanner, Date...).</li>
                            <li><code>java.io</code>: Nhập xuất file.</li>
                        </ul>
                    </li>
                    <li><b>Lưu ý:</b> Để sử dụng class từ gói khác, phải dùng từ khóa <code>import</code>.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Composition (Quan hệ "Has-a")</span>
                <p>Khác với Kế thừa ("Is-a"), Composition là khi một lớp chứa tham chiếu đến lớp khác như một thuộc tính.</p>
                <div class="code-box">
<pre>
<span class="kwd">class</span> <span class="typ">Engine</span> { ... }

<span class="kwd">class</span> <span class="typ">Car</span> {
    <span class="kwd">private</span> <span class="typ">String</span> model;
    <span class="kwd">private</span> <span class="typ">Engine</span> engine; <span class="com">// Car "có một" Engine</span>
    
    <span class="kwd">public</span> <span class="typ">Car</span>() {
        this.engine = <span class="kwd">new</span> <span class="typ">Engine</span>();
    }
}
</pre>
                </div>
                <p><i>Ưu điểm:</i> Linh hoạt hơn kế thừa, giảm sự phụ thuộc chặt chẽ giữa các lớp.</p>
            </div>
        `
    },
    // --- CHUYÊN ĐỀ 4: KẾ THỪA ---
    {
        id: "slide_4",
        title: "4. Kế thừa & Đa hình",
        content: `
            <h2 class="slide-title">Kế thừa (Inheritance) & Polymorphism</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Khái niệm Kế thừa (Inheritance)</span>
                <p>Là cơ chế cho phép một lớp con (Subclass/Child) thừa hưởng các thuộc tính và phương thức từ một lớp cha (Superclass/Parent).</p>
                <ul>
                    <li><b>Từ khóa:</b> Sử dụng <code>extends</code>.</li>
                    <li><b>Mục đích:</b> Tái sử dụng mã nguồn (Code Reusability) và tạo nên cấu trúc phân cấp.</li>
                    <li><b>Quy tắc quan trọng:</b> Java chỉ hỗ trợ <b>Đơn kế thừa</b> (Single Inheritance) đối với Class. Một lớp chỉ có thể có duy nhất một lớp cha trực tiếp.</li>
                </ul>
                <div class="code-box">
<pre>
<span class="kwd">class</span> <span class="typ">Animal</span> { <span class="kwd">int</span> age; }
<span class="kwd">class</span> <span class="typ">Dog</span> <span class="kwd">extends</span> <span class="typ">Animal</span> { 
    <span class="com">// Dog tự động có thuộc tính age</span>
}
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Ghi đè phương thức (Method Overriding)</span>
                <p>Xảy ra khi lớp con cung cấp một cài đặt cụ thể cho phương thức đã được định nghĩa ở lớp cha.</p>
                <ul>
                    <li>Phải có cùng tên, cùng tham số (signature) và cùng kiểu trả về.</li>
                    <li>Nên sử dụng annotation <code>@Override</code> để trình biên dịch kiểm tra lỗi.</li>
                    <li>Phương thức <code>static</code> và <code>final</code> không thể bị ghi đè.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Từ khóa Super</span>
                <p>Dùng để tham chiếu đến thành phần của lớp cha trực tiếp.</p>
                <table class="compare-table">
                    <tr>
                        <th>Cú pháp</th>
                        <th>Chức năng</th>
                    </tr>
                    <tr>
                        <td><code>super()</code></td>
                        <td>Gọi constructor của lớp cha. <b>Phải là dòng lệnh đầu tiên</b> trong constructor lớp con.</td>
                    </tr>
                    <tr>
                        <td><code>super.methodName()</code></td>
                        <td>Gọi phương thức của lớp cha (thường dùng khi muốn giữ lại logic cũ của cha trong hàm ghi đè).</td>
                    </tr>
                </table>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Đa hình (Polymorphism) - Upcasting & Downcasting</span>
                <p>Khả năng một biến tham chiếu có thể trỏ tới các đối tượng của lớp con khác nhau.</p>
                <ul>
                    <li><b>Upcasting (Tự động):</b> Biến lớp Cha tham chiếu tới đối tượng Con. Luôn an toàn.
                        <br><code>Animal a = new Dog();</code>
                    </li>
                    <li><b>Downcasting (Thủ công):</b> Ép kiểu biến Cha về lại Con. Rủi ro gây lỗi <code>ClassCastException</code> nếu không đúng kiểu thực tế.
                        <br><code>Dog d = (Dog) a;</code>
                    </li>
                </ul>
                <p><i>Mẹo:</i> Dùng toán tử <code>instanceof</code> để kiểm tra trước khi Downcasting.</p>
            </div>
        `
    },
// --- CHUYÊN ĐỀ 5: TRỪU TƯỢNG ---
    {
        id: "slide_5",
        title: "5. Lớp Trừu tượng (Abstract Class)",
        content: `
            <h2 class="slide-title">Lớp Trừu tượng (Abstract Class)</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Khái niệm & Mục đích</span>
                <p>Abstract Class là một lớp "chưa hoàn chỉnh", dùng để ẩn giấu chi tiết cài đặt và chỉ hiển thị tính năng cho người dùng.</p>
                <ul>
                    <li><b>Từ khóa:</b> Sử dụng <code>abstract</code> trước <code>class</code>.</li>
                    <li><b>Mục đích:</b> Tạo ra một khuôn mẫu chung (template) cho các lớp con kế thừa.</li>
                    <li><b>Quy tắc sống còn:</b> Không thể khởi tạo đối tượng trực tiếp từ Abstract Class (<code>new AbstractClass()</code> sẽ gây lỗi biên dịch).</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Thành phần bên trong</span>
                <p>Khác với Interface (trước Java 8), Abstract Class linh hoạt hơn:</p>
                <ul>
                    <li><b>Phương thức trừu tượng (Abstract Method):</b> Chỉ có khai báo, không có thân hàm (<code>{}</code>). Lớp con <b>BẮT BUỘC</b> phải ghi đè (Override).</li>
                    <li><b>Phương thức thường (Concrete Method):</b> Có sẵn thân hàm. Các lớp con có thể dùng chung mà không cần viết lại.</li>
                    <li><b>Constructor:</b> Vẫn có hàm tạo! Nó được gọi khi lớp con được khởi tạo (thông qua <code>super()</code>).</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Ví dụ Minh họa (Hình học)</span>
                <div class="code-box">
<pre>
<span class="kwd">abstract class</span> <span class="typ">Shape</span> {
    <span class="typ">String</span> color;
    
    <span class="com">// Constructor (vẫn tồn tại dù không new được Shape)</span>
    <span class="typ">Shape</span>(<span class="typ">String</span> c) { this.color = c; }
    
    <span class="com">// Abstract method: Lớp con tự định nghĩa cách vẽ</span>
    <span class="kwd">abstract double</span> getArea();
    
    <span class="com">// Concrete method: Dùng chung cho mọi hình</span>
    <span class="kwd">void</span> display() {
        <span class="typ">System</span>.out.println("Đây là một hình màu " + color);
    }
}

<span class="kwd">class</span> <span class="typ">Circle</span> <span class="kwd">extends</span> <span class="typ">Shape</span> {
    <span class="kwd">double</span> r;
    <span class="typ">Circle</span>(<span class="typ">String</span> c, <span class="kwd">double</span> r) { 
        <span class="kwd">super</span>(c); <span class="com">// Gọi constructor của Shape</span>
        this.r = r; 
    }

    <span class="com">// Bắt buộc phải override</span>
    <span class="kwd">double</span> getArea() { <span class="kwd">return</span> 3.14 * r * r; }
}
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Khi nào dùng Abstract Class?</span>
                <ul>
                    <li>Khi bạn muốn chia sẻ code chung giữa các lớp có quan hệ chặt chẽ (Is-a).</li>
                    <li>Khi bạn muốn định nghĩa các biến thành viên (fields) không phải là <code>static</code> hay <code>final</code>.</li>
                    <li>Khi bạn muốn cung cấp các phương thức có sẵn nhưng vẫn ép buộc lớp con phải tùy biến một số hành vi cụ thể.</li>
                </ul>
            </div>
        `
    },
    // --- CHUYÊN ĐỀ 6: INTERFACE ---
    {
        id: "slide_6",
        title: "6. Interface & Đa kế thừa",
        content: `
            <h2 class="slide-title">Interface & Cơ chế Đa kế thừa</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Tại sao cần Interface? (Vấn đề Đa kế thừa)</span>
                <p>Trong Java, một lớp <b>KHÔNG</b> thể kế thừa từ nhiều lớp cha (để tránh xung đột "Diamond Problem" - không biết chọn hàm nào nếu 2 cha có cùng hàm).</p>
                <ul>
                    <li><b>Giải pháp:</b> Sử dụng <b>Interface</b>.</li>
                    <li>Một lớp có thể triển khai (implements) <b>nhiều</b> Interface cùng lúc.</li>
                    <li>Interface đóng vai trò như một "bản hợp đồng" (Contract). Nếu Class ký hợp đồng, nó phải thực thi mọi điều khoản.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Cấu trúc của Interface</span>
                <p>Các thành phần bên trong Interface có tính chất mặc định rất đặc biệt:</p>
                <ul>
                    <li><b>Khai báo:</b> Dùng từ khóa <code>interface</code>.</li>
                    <li><b>Thuộc tính:</b> Mặc định luôn là <code>public static final</code> (Hằng số).</li>
                    <li><b>Phương thức (Trước Java 8):</b> Mặc định luôn là <code>public abstract</code> (Không có thân hàm).</li>
                    <li><b>Constructor:</b> Không tồn tại (Không thể <code>new Interface()</code>).</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Ví dụ Minh họa (Đa triển khai)</span>
                <p>Một chiếc xe lai (Hybrid) vừa nạp nhiên liệu xăng, vừa sạc điện.</p>
                <div class="code-box">
<pre>
<span class="kwd">interface</span> <span class="typ">Gasoline</span> {
    <span class="kwd">void</span> fillTank();
}

<span class="kwd">interface</span> <span class="typ">Electric</span> {
    <span class="kwd">void</span> chargeBattery();
}

<span class="com">// Class triển khai CẢ HAI interface</span>
<span class="kwd">class</span> <span class="typ">HybridCar</span> <span class="kwd">implements</span> <span class="typ">Gasoline</span>, <span class="typ">Electric</span> {
    <span class="kwd">public void</span> fillTank() {
        <span class="typ">System</span>.out.println("Đang đổ xăng...");
    }
    <span class="kwd">public void</span> chargeBattery() {
        <span class="typ">System</span>.out.println("Đang sạc điện...");
    }
}
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Cải tiến từ Java 8 (Default Method)</span>
                <p>Trước Java 8, nếu thêm hàm vào Interface, tất cả class con đều lỗi. Java 8 giải quyết bằng <b>Default Method</b>.</p>
                <ul>
                    <li>Cho phép Interface có phương thức chứa thân hàm (body).</li>
                    <li>Dùng từ khóa <code>default</code>.</li>
                    <li>Lớp con có thể dùng luôn hoặc ghi đè tùy ý.</li>
                </ul>
                <div class="code-box">
<pre>
<span class="kwd">interface</span> <span class="typ">Animal</span> {
    <span class="kwd">void</span> makeSound(); <span class="com">// Abstract</span>
    
    <span class="kwd">default void</span> sleep() { <span class="com">// Có sẵn code</span>
        <span class="typ">System</span>.out.println("Zzz...");
    }
}
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">5. Static Binding vs Dynamic Binding</span>
                <table class="compare-table">
                    <tr>
                        <th>Static Binding (Liên kết Tĩnh)</th>
                        <th>Dynamic Binding (Liên kết Động)</th>
                    </tr>
                    <tr>
                        <td>Xảy ra lúc <b>Biên dịch</b> (Compile-time).</td>
                        <td>Xảy ra lúc <b>Chạy</b> (Runtime).</td>
                    </tr>
                    <tr>
                        <td>Dựa trên <b>Kiểu khai báo</b> (Reference Type).</td>
                        <td>Dựa trên <b>Đối tượng thực tế</b> (Actual Object).</td>
                    </tr>
                    <tr>
                        <td>Áp dụng cho: <code>static</code>, <code>private</code>, <code>final</code> methods và Overloading.</td>
                        <td>Áp dụng cho: Overriding (Đa hình).</td>
                    </tr>
                </table>
            </div>
        `
    },
    // --- CHUYÊN ĐỀ 7: EXCEPTION 1 ---
    {
        id: "slide_7",
        title: "7. Xử lý ngoại lệ (Cơ bản)",
        content: `
            <h2 class="slide-title">Exception Handling: Cơ bản</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Phân biệt Error và Exception</span>
                <p>Mọi vấn đề xảy ra khi chạy chương trình đều kế thừa từ lớp cha <code>Throwable</code>.</p>
                <table class="compare-table">
                    <tr>
                        <th>Đặc điểm</th>
                        <th>Error (Lỗi nghiêm trọng)</th>
                        <th>Exception (Ngoại lệ)</th>
                    </tr>
                    <tr>
                        <td><b>Nguồn gốc</b></td>
                        <td>Từ hệ thống (JVM, phần cứng).</td>
                        <td>Từ mã nguồn chương trình.</td>
                    </tr>
                    <tr>
                        <td><b>Khả năng xử lý</b></td>
                        <td>Không thể (Chương trình thường chết ngay).</td>
                        <td>Có thể bắt (catch) và xử lý để chạy tiếp.</td>
                    </tr>
                    <tr>
                        <td><b>Ví dụ</b></td>
                        <td><code>StackOverflowError</code>, <code>OutOfMemoryError</code>.</td>
                        <td><code>NullPointerException</code>, <code>IOException</code>.</td>
                    </tr>
                </table>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Phân loại Exception (Quan trọng)</span>
                <p>Java chia Exception thành 2 loại dựa trên thời điểm kiểm tra:</p>
                <ul>
                    <li><b>Checked Exception (Lỗi biên dịch):</b>
                        <ul>
                            <li>Trình biên dịch bắt buộc bạn phải xử lý (try-catch) hoặc khai báo ném lỗi (throws).</li>
                            <li>Thường là lỗi khách quan (File không tồn tại, Mất mạng, Lỗi SQL).</li>
                            <li>VD: <code>IOException</code>, <code>SQLException</code>, <code>ClassNotFoundException</code>.</li>
                        </ul>
                    </li>
                    <li><b>Unchecked Exception (Lỗi Runtime):</b>
                        <ul>
                            <li>Xảy ra khi chạy. Trình biên dịch không bắt buộc xử lý.</li>
                            <li>Thường do lỗi logic của lập trình viên.</li>
                            <li>Kế thừa từ <code>RuntimeException</code>.</li>
                            <li>VD: <code>NullPointerException</code>, <code>ArithmeticException</code> (Chia 0), <code>ArrayIndexOutOfBoundsException</code>.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Khối lệnh Try - Catch - Finally</span>
                <p>Cấu trúc chuẩn để xử lý ngoại lệ an toàn:</p>
                <div class="code-box">
<pre>
<span class="kwd">try</span> {
    <span class="com">// Code có thể gây ra lỗi</span>
    <span class="kwd">int</span> data = 50 / 0; <span class="com">// Lỗi chia 0</span>
} 
<span class="kwd">catch</span> (<span class="typ">ArithmeticException</span> e) {
    <span class="com">// Code xử lý khi lỗi xảy ra</span>
    <span class="typ">System</span>.out.println("Không thể chia cho 0!");
} 
<span class="kwd">finally</span> {
    <span class="com">// Luôn chạy dù có lỗi hay không</span>
    <span class="typ">System</span>.out.println("Kết thúc xử lý.");
    <span class="com">// Thường dùng để đóng File, đóng kết nối DB</span>
}
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Call Stack (Ngăn xếp gọi hàm)</span>
                <p>Khi ngoại lệ xảy ra, JVM sẽ tìm kiếm "Exception Handler" trong Call Stack:</p>
                <ol>
                    <li>Tìm trong hàm hiện tại.</li>
                    <li>Nếu không thấy, chuyển ngược về hàm đã gọi nó (Caller).</li>
                    <li>Tiếp tục ngược lên đến hàm <code>main()</code>.</li>
                    <li>Nếu vẫn không ai bắt lỗi -> Chương trình dừng (Crash) và in ra Stack Trace.</li>
                </ol>
            </div>
        `
    },
    // --- CHUYÊN ĐỀ 8: EXCEPTION 2 ---
    {
        id: "slide_8",
        title: "8. Xử lý ngoại lệ (Nâng cao)",
        content: `
            <h2 class="slide-title">Các kỹ thuật Xử lý Ngoại lệ Nâng cao</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Từ khóa throw vs throws</span>
                <p>Hai từ khóa này rất dễ nhầm lẫn. Bảng sau giúp phân biệt rõ ràng:</p>
                <table class="compare-table">
                    <tr>
                        <th>Đặc điểm</th>
                        <th>throw</th>
                        <th>throws</th>
                    </tr>
                    <tr>
                        <td><b>Vị trí</b></td>
                        <td>Trong <b>thân phương thức</b>.</td>
                        <td>Sau <b>tên phương thức</b> (method signature).</td>
                    </tr>
                    <tr>
                        <td><b>Chức năng</b></td>
                        <td>Hành động ném ra một <b>đối tượng</b> ngoại lệ cụ thể ngay lập tức.</td>
                        <td>Khai báo (cảnh báo) rằng phương thức này <b>có thể</b> ném ra ngoại lệ.</td>
                    </tr>
                    <tr>
                        <td><b>Số lượng</b></td>
                        <td>Chỉ ném 1 Exception tại 1 thời điểm.</td>
                        <td>Có thể khai báo nhiều Exception (cách nhau dấu phẩy).</td>
                    </tr>
                </table>
                <div class="code-box">
<pre>
<span class="com">// throws: Cảnh báo hàm này nguy hiểm, người gọi phải xử lý</span>
<span class="kwd">public void</span> checkAge(<span class="kwd">int</span> age) <span class="kwd">throws</span> <span class="typ">InvalidAgeException</span> {
    <span class="kwd">if</span> (age < 18) {
        <span class="com">// throw: Thực hiện ném lỗi</span>
        <span class="kwd">throw new</span> <span class="typ">InvalidAgeException</span>("Tuổi không hợp lệ!");
    }
}
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Tạo Ngoại lệ riêng (User-defined Exception)</span>
                <p>Dùng khi các Exception có sẵn của Java (như <code>IOException</code>, <code>NullPointer</code>...) không diễn tả đúng lỗi nghiệp vụ của bạn (Ví dụ: "Tài khoản không đủ tiền").</p>
                <ul>
                    <li><b>Bước 1:</b> Tạo class mới kế thừa từ <code>Exception</code> (nếu muốn là Checked) hoặc <code>RuntimeException</code> (nếu muốn là Unchecked).</li>
                    <li><b>Bước 2:</b> Viết constructor gọi <code>super(message)</code>.</li>
                </ul>
                <div class="code-box">
<pre>
<span class="kwd">class</span> <span class="typ">NotEnoughMoneyException</span> <span class="kwd">extends</span> <span class="typ">Exception</span> {
    <span class="kwd">public</span> <span class="typ">NotEnoughMoneyException</span>(<span class="typ">String</span> msg) {
        <span class="kwd">super</span>(msg);
    }
}
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Quy tắc Catching (Thứ tự bắt lỗi)</span>
                <p>Khi dùng nhiều khối <code>catch</code> liên tiếp, phải tuân thủ quy tắc:</p>
                <ul>
                    <li><b>Con trước - Cha sau</b> (Specific to General).</li>
                    <li>Nếu bắt Exception cha (VD: <code>Exception</code>) trước, nó sẽ "nuốt" hết các lỗi của con, khiến các khối catch bên dưới trở thành mã chết (Unreachable code).</li>
                </ul>
                <div class="code-box">
<pre>
<span class="kwd">try</span> {
    <span class="com">// Code có thể gây lỗi</span>
} 
<span class="kwd">catch</span> (<span class="typ">FileNotFoundException</span> e) { ... } <span class="com">// Đúng: Lỗi cụ thể bắt trước</span>
<span class="kwd">catch</span> (<span class="typ">IOException</span> e) { ... }           <span class="com">// Đúng: Lỗi cha bắt sau</span>
<span class="kwd">catch</span> (<span class="typ">Exception</span> e) { ... }             <span class="com">// Đúng: Lỗi tổ tiên bắt cuối cùng</span>
</pre>
                </div>
            </div>
        `
    },
    // --- CHUYÊN ĐỀ 9: IO STREAMS ---
    {
        id: "slide_9",
        title: "9. Luồng I/O & Files",
        content: `
            <h2 class="slide-title">Input/Output Streams (Luồng Vào/Ra)</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Khái niệm Stream (Luồng)</span>
                <p>Stream là một dòng dữ liệu tuần tự chảy từ nguồn (Source) đến đích (Destination). Java chia Stream thành 2 loại chính dựa trên đơn vị dữ liệu xử lý:</p>
                <table class="compare-table">
                    <tr>
                        <th>Đặc điểm</th>
                        <th>Byte Streams (Luồng Byte)</th>
                        <th>Character Streams (Luồng Ký tự)</th>
                    </tr>
                    <tr>
                        <td><b>Đơn vị xử lý</b></td>
                        <td>8-bit bytes (Dữ liệu thô).</td>
                        <td>16-bit Unicode (Dữ liệu văn bản).</td>
                    </tr>
                    <tr>
                        <td><b>Lớp gốc (Abstract)</b></td>
                        <td><code>InputStream</code>, <code>OutputStream</code></td>
                        <td><code>Reader</code>, <code>Writer</code></td>
                    </tr>
                    <tr>
                        <td><b>Dùng khi nào?</b></td>
                        <td>Xử lý ảnh, video, file nhạc, file nhị phân.</td>
                        <td>Xử lý file text (.txt), đọc/ghi chuỗi.</td>
                    </tr>
                    <tr>
                        <td><b>Lớp cụ thể</b></td>
                        <td><code>FileInputStream</code>, <code>FileOutputStream</code></td>
                        <td><code>FileReader</code>, <code>FileWriter</code></td>
                    </tr>
                </table>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Buffered Streams (Luồng đệm)</span>
                <p>Giúp tăng hiệu năng I/O bằng cách đọc/ghi một khối dữ liệu lớn vào bộ nhớ đệm (buffer) thay vì truy cập ổ cứng liên tục từng byte một.</p>
                <ul>
                    <li><b>Byte:</b> <code>BufferedInputStream</code>, <code>BufferedOutputStream</code>.</li>
                    <li><b>Character:</b> <code>BufferedReader</code> (có phương thức <code>readLine()</code> rất tiện), <code>BufferedWriter</code>.</li>
                </ul>
                <div class="code-box">
<pre>
<span class="com">// Ví dụ đọc file text từng dòng</span>
<span class="typ">FileReader</span> fr = <span class="kwd">new</span> <span class="typ">FileReader</span>("data.txt");
<span class="typ">BufferedReader</span> br = <span class="kwd">new</span> <span class="typ">BufferedReader</span>(fr);
<span class="typ">String</span> line;
<span class="kwd">while</span> ((line = br.readLine()) != <span class="kwd">null</span>) {
    <span class="typ">System</span>.out.println(line);
}
br.close();
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Serialization (Tuần tự hóa)</span>
                <p>Cơ chế chuyển đổi trạng thái của một đối tượng (Object) thành dòng byte (Byte Stream) để lưu trữ hoặc truyền đi.</p>
                <ul>
                    <li><b>Điều kiện:</b> Class phải implement interface <code>Serializable</code> (đây là Marker Interface, không có hàm nào).</li>
                    <li><b>Từ khóa transient:</b> Dùng cho thuộc tính không muốn được serialize (VD: mật khẩu).</li>
                    <li><b>Lớp sử dụng:</b> <code>ObjectOutputStream</code> (ghi object), <code>ObjectInputStream</code> (đọc object).</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Lớp File & RandomAccessFile</span>
                <ul>
                    <li><b>Lớp File:</b> Đại diện cho đường dẫn tệp hoặc thư mục (không dùng để đọc/ghi nội dung). Dùng để kiểm tra tồn tại (<code>exists()</code>), tạo mới (<code>createNewFile()</code>), lấy tên, kích thước...</li>
                    <li><b>RandomAccessFile:</b> Cho phép đọc/ghi dữ liệu tại vị trí bất kỳ trong file (như con trỏ). Chế độ: "r" (read), "rw" (read/write).</li>
                </ul>
            </div>
        `
    },
    // --- CHUYÊN ĐỀ 10: COLLECTIONS ---
    {
        id: "slide_10",
        title: "10. Cấu trúc dữ liệu & Collections",
        content: `
            <h2 class="slide-title">Java Collections Framework</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Wrapper Classes (Lớp bao đóng)</span>
                <p>Java Collections chỉ lưu trữ Đối tượng (Object), không lưu kiểu nguyên thủy (int, double...). Do đó cần Wrapper Class.</p>
                <ul>
                    <li><b>Autoboxing:</b> Tự động chuyển đổi từ primitive sang object. <br><code>Integer a = 10;</code> (tương đương <code>new Integer(10)</code>).</li>
                    <li><b>Unboxing:</b> Tự động chuyển từ object sang primitive. <br><code>int b = a;</code> (tương đương <code>a.intValue()</code>).</li>
                    <li>Các hàm tiện ích: <code>Integer.parseInt("123")</code>, <code>Double.valueOf("3.14")</code>.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. List Interface (Danh sách)</span>
                <p>Là tập hợp có thứ tự (ordered), cho phép phần tử trùng lặp.</p>
                <table class="compare-table">
                    <tr>
                        <th>Đặc điểm</th>
                        <th>ArrayList</th>
                        <th>LinkedList</th>
                    </tr>
                    <tr>
                        <td><b>Cấu trúc</b></td>
                        <td>Mảng động (Dynamic Array).</td>
                        <td>Danh sách liên kết đôi (Doubly Linked List).</td>
                    </tr>
                    <tr>
                        <td><b>Truy xuất (Get)</b></td>
                        <td>Rất nhanh (O(1)) vì dùng index.</td>
                        <td>Chậm (O(n)) vì phải duyệt từ đầu.</td>
                    </tr>
                    <tr>
                        <td><b>Thêm/Xóa</b></td>
                        <td>Chậm (phải dời các phần tử sau).</td>
                        <td>Nhanh (chỉ cần nối lại liên kết node).</td>
                    </tr>
                    <tr>
                        <td><b>Dùng khi</b></td>
                        <td>Dữ liệu ít thay đổi, cần đọc nhiều.</td>
                        <td>Dữ liệu thêm/xóa liên tục.</td>
                    </tr>
                </table>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Stack & Queue</span>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                    <div>
                        <b>Stack (Ngăn xếp):</b>
                        <ul>
                            <li>Nguyên lý: <b>LIFO</b> (Last In First Out) - Vào sau ra trước.</li>
                            <li>Hàm: <code>push()</code> (thêm), <code>pop()</code> (lấy ra), <code>peek()</code> (xem đầu).</li>
                            <li>VD: Nút Back trình duyệt, Undo/Redo.</li>
                        </ul>
                    </div>
                    <div>
                        <b>Queue (Hàng đợi):</b>
                        <ul>
                            <li>Nguyên lý: <b>FIFO</b> (First In First Out) - Vào trước ra trước.</li>
                            <li>Hàm: <code>add()</code> (thêm), <code>poll()</code> (lấy ra), <code>peek()</code>.</li>
                            <li>VD: Hàng đợi máy in, xử lý request.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Map Interface (Bản đồ)</span>
                <p>Lưu trữ dữ liệu dưới dạng cặp <b>Key - Value</b>. Key là duy nhất (không trùng).</p>
                <ul>
                    <li><b>HashMap:</b> Sử dụng bảng băm. Thứ tự các phần tử không được đảm bảo. Hiệu năng truy xuất cực nhanh O(1).</li>
                    <li>Cho phép 1 Key là <code>null</code> và nhiều Value là <code>null</code>.</li>
                </ul>
                <div class="code-box">
<pre>
<span class="typ">HashMap</span>&lt;<span class="typ">String</span>, <span class="typ">String</span>&gt; dictionary = <span class="kwd">new</span> <span class="typ">HashMap</span>&lt;&gt;();
dictionary.put("Hello", "Xin chào");
dictionary.put("Bye", "Tạm biệt");

<span class="typ">String</span> meaning = dictionary.get("Hello"); <span class="com">// Xin chào</span>
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">5. Iterator (Trình duyệt)</span>
                <p>Dùng để duyệt qua các phần tử của Collection một cách an toàn (tránh lỗi khi vừa duyệt vừa xóa).</p>
                <div class="code-box">
<pre>
<span class="typ">Iterator</span>&lt;<span class="typ">String</span>&gt; it = list.iterator();
<span class="kwd">while</span>(it.hasNext()) {
    <span class="typ">String</span> item = it.next();
    <span class="kwd">if</span>(item.equals("Rác")) {
        it.remove(); <span class="com">// Xóa an toàn</span>
    }
}
</pre>
                </div>
            </div>
        `
    },
    // --- CHUYÊN ĐỀ 11: GENERICS ---
    {
        id: "slide_11",
        title: "11. Generics (Tổng quát hóa)",
        content: `
            <h2 class="slide-title">Generics: Lập trình Tổng quát</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Khái niệm & Lợi ích</span>
                <p>Generics (được giới thiệu từ Java 5) cho phép định nghĩa lớp, interface và phương thức với tham số kiểu dữ liệu (Type Parameters).</p>
                <ul>
                    <li><b>Type Safety (An toàn kiểu):</b> Phát hiện lỗi sai kiểu ngay lúc biên dịch (Compile-time) thay vì lỗi <code>ClassCastException</code> lúc chạy (Runtime).</li>
                    <li><b>Code Reuse (Tái sử dụng):</b> Viết một thuật toán duy nhất dùng cho nhiều loại dữ liệu khác nhau (VD: Sắp xếp List số nguyên, List chuỗi...).</li>
                    <li><b>Eliminate Casting:</b> Không cần ép kiểu thủ công khi lấy dữ liệu ra khỏi Collection.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Cú pháp Generic Class & Method</span>
                <p>Sử dụng cặp ngoặc nhọn <code>&lt; &gt;</code> để khai báo tham số kiểu. Các ký hiệu thường dùng: <b>E</b> (Element), <b>K</b> (Key), <b>V</b> (Value), <b>T</b> (Type).</p>
                <div class="code-box">
<pre>
<span class="com">// Generic Class: Một cặp giá trị Key-Value bất kỳ</span>
<span class="kwd">public class</span> <span class="typ">Pair</span>&lt;K, V&gt; {
    <span class="kwd">private</span> K key;
    <span class="kwd">private</span> V value;
    
    <span class="kwd">public</span> <span class="typ">Pair</span>(K key, V value) { 
        this.key = key; 
        this.value = value; 
    }
}

<span class="com">// Sử dụng:</span>
<span class="typ">Pair</span>&lt;<span class="typ">Integer</span>, <span class="typ">String</span>&gt; p = <span class="kwd">new</span> <span class="typ">Pair</span>&lt;&gt;(1, "Apple");
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Bounded Type Parameters (Tham số có giới hạn)</span>
                <p>Đôi khi bạn muốn hạn chế các kiểu dữ liệu được phép sử dụng. Dùng từ khóa <code>extends</code>.</p>
                <ul>
                    <li><code>&lt;T extends Number&gt;</code>: T chỉ có thể là Number hoặc lớp con của Number (Integer, Double...).</li>
                    <li><code>&lt;T extends Comparable&lt;T&gt;&gt;</code>: T phải là lớp có khả năng so sánh (để dùng trong thuật toán sắp xếp, tìm min/max).</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Wildcards (Ký tự đại diện ?)</span>
                <p>Dùng trong tham số phương thức khi ta muốn làm việc với "một List của cái gì đó chưa biết".</p>
                <table class="compare-table">
                    <tr>
                        <th>Loại Wildcard</th>
                        <th>Cú pháp</th>
                        <th>Đặc điểm (Quy tắc PECS)</th>
                    </tr>
                    <tr>
                        <td><b>Unbounded</b></td>
                        <td><code>List&lt;?&gt;</code></td>
                        <td>Chấp nhận mọi kiểu List. Thường chỉ dùng để đọc dạng Object hoặc đếm <code>size()</code>.</td>
                    </tr>
                    <tr>
                        <td><b>Upper Bounded</b></td>
                        <td><code>List&lt;? extends Number&gt;</code></td>
                        <td>Chấp nhận List chứa Number hoặc con của nó. <br>👉 <b>An toàn để ĐỌC (Producer)</b>, không thể thêm phần tử (trừ null).</td>
                    </tr>
                    <tr>
                        <td><b>Lower Bounded</b></td>
                        <td><code>List&lt;? super Integer&gt;</code></td>
                        <td>Chấp nhận List chứa Integer hoặc cha của nó (Number, Object). <br>👉 <b>An toàn để GHI (Consumer)</b>, đọc ra chỉ được kiểu Object.</td>
                    </tr>
                </table>
            </div>
        `
    },
    // --- CHUYÊN ĐỀ 12: DESIGN PATTERNS ---
    {
        id: "slide_12",
        title: "12. Design Patterns & SOLID",
        content: `
            <h2 class="slide-title">Mẫu thiết kế & Nguyên lý SOLID</h2>
            
            <div class="concept-block">
                <span class="concept-title">1. Tổng quan</span>
                <p>Design Patterns là các giải pháp tái sử dụng cho các vấn đề phổ biến trong thiết kế phần mềm. Có 3 nhóm chính:</p>
                <ul>
                    <li><b>Creational (Khởi tạo):</b> Cách tạo đối tượng linh hoạt.</li>
                    <li><b>Structural (Cấu trúc):</b> Cách tổ chức, kết hợp class/object.</li>
                    <li><b>Behavioral (Hành vi):</b> Cách giao tiếp, phân công trách nhiệm giữa các object.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">2. Nhóm Creational (Khởi tạo)</span>
                <table class="compare-table">
                    <tr><th>Pattern</th><th>Mục đích & Đặc điểm</th></tr>
                    <tr>
                        <td><b>Singleton</b></td>
                        <td>Đảm bảo class chỉ có <b>duy nhất 1 instance</b> và cung cấp điểm truy cập toàn cục.<br><i>Key:</i> <code>private constructor</code>, <code>static instance</code>.</td>
                    </tr>
                    <tr>
                        <td><b>Factory Method</b></td>
                        <td>Định nghĩa interface tạo đối tượng, nhưng để <b>lớp con quyết định</b> khởi tạo lớp nào.</td>
                    </tr>
                    <tr>
                        <td><b>Abstract Factory</b></td>
                        <td>Tạo ra các <b>họ (families)</b> đối tượng liên quan mà không chỉ định lớp cụ thể.</td>
                    </tr>
                    <tr>
                        <td><b>Prototype</b></td>
                        <td>Tạo đối tượng mới bằng cách <b>copy (clone)</b> một đối tượng mẫu có sẵn.</td>
                    </tr>
                </table>
                <div class="code-box">
<pre>
<span class="com">// Ví dụ Singleton</span>
<span class="kwd">class</span> <span class="typ">Database</span> {
    <span class="kwd">private static</span> <span class="typ">Database</span> instance;
    <span class="kwd">private</span> <span class="typ">Database</span>() {} <span class="com">// Chặn new Database() bên ngoài</span>
    
    <span class="kwd">public static</span> <span class="typ">Database</span> getInstance() {
        <span class="kwd">if</span> (instance == <span class="kwd">null</span>) instance = <span class="kwd">new</span> <span class="typ">Database</span>();
        <span class="kwd">return</span> instance;
    }
}
</pre>
                </div>
            </div>

            <div class="concept-block">
                <span class="concept-title">3. Nhóm Structural (Cấu trúc)</span>
                <ul>
                    <li><b>Adapter:</b> Giúp các interface không tương thích làm việc được với nhau (như đầu chuyển cổng USB-C sang HDMI).</li>
                    <li><b>Decorator:</b> Thêm tính năng/hành vi cho đối tượng một cách động (dynamically) mà không cần dùng kế thừa (Wrapper). Ví dụ: <code>new BorderDecorator(new Window())</code>.</li>
                    <li><b>Composite:</b> Xử lý nhóm đối tượng (cây thư mục) giống hệt như một đối tượng đơn lẻ.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">4. Nhóm Behavioral (Hành vi)</span>
                <ul>
                    <li><b>Strategy:</b> Định nghĩa một họ thuật toán, đóng gói từng cái và làm chúng hoán đổi được cho nhau (Interchangeable). Ví dụ: Thanh toán (Thẻ/Tiền mặt/Ví).</li>
                    <li><b>Observer:</b> (Quan sát viên) Khi một đối tượng thay đổi trạng thái, tất cả các đối tượng phụ thuộc nó sẽ được thông báo tự động.</li>
                </ul>
            </div>

            <div class="concept-block">
                <span class="concept-title">5. Nguyên lý SOLID</span>
                <p>5 nguyên tắc vàng trong thiết kế OOP:</p>
                <ul>
                    <li><b>S - Single Responsibility:</b> Một class chỉ nên có một lý do duy nhất để thay đổi (một trách nhiệm).</li>
                    <li><b>O - Open/Closed:</b> Mở rộng (Extension) thì dễ, sửa đổi (Modification) thì hạn chế.</li>
                    <li><b>L - Liskov Substitution:</b> Class con phải thay thế được class cha mà không làm hỏng chương trình.</li>
                    <li><b>I - Interface Segregation:</b> Chia nhỏ interface lớn thành nhiều interface nhỏ chuyên biệt.</li>
                    <li><b>D - Dependency Inversion:</b> Phụ thuộc vào Abstraction (Interface/Abstract class), không phụ thuộc vào class cụ thể.</li>
                </ul>
            </div>
        `
    }
];