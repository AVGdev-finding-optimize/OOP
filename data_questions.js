// Ngân hàng câu hỏi đầy đủ
// Type: "radio" (trắc nghiệm), "text" (điền từ), "code" (đọc code)
const QUESTION_BANK = [
    // --- CHỦ ĐỀ: OOP FUNDAMENTALS & KHÁI NIỆM CƠ BẢN ---
    {
        id: 1, topic: "OOP Fundamentals", type: "radio",
        question: "OOP là mô hình lập trình tổ chức mã bằng cách mô hình hóa các thực thể hoặc khái niệm trong thế giới thực thành các...",
        options: ["Classes", "Objects", "Methods", "Variables"],
        answer: 1, // Objects
        explanation: "OOP là mô hình lập trình tổ chức mã bằng cách mô hình hóa các thực thể hoặc khái niệm trong thế giới thực thành các đối tượng (objects) [1]."
    },
    {
        id: 2, topic: "OOP Fundamentals", type: "text",
        question: "Trong Java, một đối tượng (object) là một thể hiện (instance) được tạo ra từ một 'khuôn mẫu' gọi là gì?",
        answer: "class",
        explanation: "Class có thể được xem là bản thiết kế (blueprint) định nghĩa đối tượng nên trông như thế nào, và đối tượng là thực thể thực tế được tạo ra từ class đó [2]."
    },
    {
        id: 3, topic: "OOP Fundamentals", type: "radio",
        question: "Tính chất nào của OOP cho phép một đối tượng duy nhất (single entity) có khả năng mang nhiều hình thức (multiple forms)?",
        options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
        answer: 2, // Polymorphism
        explanation: "Polymorphism (Đa hình) đề cập đến khả năng của một thực thể duy nhất (một đối tượng) có thể mang nhiều hình thức [3]."
    },
    {
        id: 4, topic: "OOP Fundamentals", type: "radio",
        question: "Tính chất Đóng gói (Encapsulation) được mô tả tốt nhất là gì?",
        options: [
            "Khả năng mở rộng class mà không cần thay đổi mã nguồn.",
            "Ẩn giấu các chi tiết phức tạp và chỉ hiển thị chức năng cần thiết.",
            "Gói gọn dữ liệu và các thao tác trên dữ liệu vào một thực thể thống nhất (lớp đối tượng).",
            "Cho phép các lớp con kế thừa thuộc tính của lớp cha."
        ],
        answer: 2, // Gói gọn dữ liệu và các thao tác trên dữ liệu vào một thực thể thống nhất (lớp đối tượng).
        explanation: "Đóng gói (Encapsulation) là việc gói gọn dữ liệu và các thao tác trên dữ liệu vào một thực thể thống nhất (lớp đối tượng), giúp thuận tiện cho việc tái sử dụng [4]."
    },
    {
        id: 5, topic: "OOP Fundamentals", type: "radio",
        question: "Khái niệm Trừu tượng (Abstraction) trong OOP có cơ chế chính là gì?",
        options: [
            "Che giấu các chi tiết triển khai phức tạp và chỉ hiển thị thông tin cần thiết.",
            "Đảm bảo chỉ có một thể hiện của class tồn tại.",
            "Cho phép truy cập trực tiếp vào tất cả các trường dữ liệu.",
            "Định nghĩa các thuật toán độc lập với kiểu dữ liệu."
        ],
        answer: 0, // Che giấu các chi tiết triển khai phức tạp và chỉ hiển thị thông tin cần thiết.
        explanation: "Trừu tượng (Abstraction) là cơ chế ẩn giấu các chi tiết triển khai phức tạp và chỉ hiển thị thông tin cần thiết cho người dùng [5]."
    },
    {
        id: 6, topic: "OOP Fundamentals", type: "radio",
        question: "Trong OOP, các hành động mà đối tượng có khả năng thực hiện được gọi là gì trong Java?",
        options: ["Fields", "Attributes", "Methods", "Variables"],
        answer: 2, // Methods
        explanation: "Các hành động (actions) của đối tượng trong Java được gọi là methods (phương thức) [6]."
    },
    {
        id: 7, topic: "OOP Fundamentals", type: "radio",
        question: "Nếu một đối tượng chỉ có các trường dữ liệu (fields) mà không bao gồm bất kỳ phương thức nào, mục đích chính của nó là gì?",
        options: [
            "Thực hiện các hành động phức tạp.",
            "Tổ chức lưu trữ dữ liệu.",
            "Đảm bảo tính đa hình.",
            "Gọi các phương thức tĩnh."
        ],
        answer: 1, // Tổ chức lưu trữ dữ liệu.
        explanation: "Một số đối tượng có thể chỉ có các trường dữ liệu, đóng vai trò là cách để tổ chức lưu trữ dữ liệu nhưng không bao gồm bất kỳ phương thức nào [7]."
    },
    {
        id: 8, topic: "OOP Fundamentals", type: "text",
        question: "Trong ngữ cảnh Kế thừa (Inheritance), lớp mà được các lớp khác mở rộng được gọi là lớp cơ sở (Base class) hoặc lớp gì?",
        answer: "Super class",
        explanation: "Lớp cơ sở (Base class) còn được gọi là lớp cha (Super class) hoặc lớp chung (general class) [5]."
    },
    {
        id: 9, topic: "OOP Fundamentals", type: "radio",
        question: "Đâu là lợi ích của việc sử dụng các đối tượng (objects) trong mã nguồn?",
        options: [
            "Mã trở nên khó hiểu hơn.",
            "Mã trở nên có tổ chức và dễ hiểu hơn.",
            "Việc bảo trì mã trở nên phức tạp hơn.",
            "Java có thể hoạt động mà không cần đối tượng."
        ],
        answer: 1, // Mã trở nên có tổ chức và dễ hiểu hơn.
        explanation: "Các đối tượng kết hợp các biến lại với nhau để làm cho mã có ý nghĩa hơn, mã trở nên có tổ chức và dễ hiểu hơn, giúp bảo trì đơn giản hơn [8]."
    },
    {
        id: 10, topic: "OOP Fundamentals", type: "text",
        question: "Để truy cập một trường (field) hoặc gọi một phương thức (method) trong một đối tượng Java, người ta sử dụng toán tử nào?",
        answer: ".",
        explanation: "Việc truy cập một trường hoặc gọi một phương thức trong một đối tượng được thực hiện bằng cách sử dụng toán tử dấu chấm “.” [9]."
    },
    {
        id: 11, topic: "OOP Fundamentals", type: "radio",
        question: "Một lớp Java (Java class) phải được tạo trong tệp nào?",
        options: [
            "Nó có thể được tạo ở bất cứ đâu trong dự án.",
            "Nó phải được tạo trong tệp riêng của nó.",
            "Nó phải nằm trong tệp .exe.",
            "Tùy thuộc vào IDE."
        ],
        answer: 1, // Nó phải được tạo trong tệp riêng của nó.
        explanation: "Trong Java, mỗi class nên được tạo trong tệp riêng của nó [10]."
    },
    {
        id: 12, topic: "OOP Fundamentals", type: "radio",
        question: "Theo quy ước đặt tên (Naming convention) trong Java, một Class nên được đặt tên theo quy ước nào?",
        options: ["camelCase (bắt đầu bằng chữ thường)", "PascalCase (bắt đầu bằng chữ hoa)", "snake_case", "SCREAMING_SNAKE_CASE"],
        answer: 1, // PascalCase (thường được gọi là CamelCase bắt đầu bằng chữ hoa trong nguồn)
        explanation: "Quy ước đặt tên cho Class là CamelCase (bắt đầu bằng chữ hoa) [11]."
    },
    {
        id: 13, topic: "OOP Fundamentals", type: "radio",
        question: "Trong Java, String có phải là kiểu dữ liệu nguyên thủy (primitive type) không?",
        options: ["Có, String là kiểu nguyên thủy.", "Không, String là một class.", "Chỉ khi khai báo bằng literal.", "Chỉ khi sử dụng từ khóa new."],
        answer: 1, // Không, String là một class.
        explanation: "String không phải là một kiểu nguyên thủy, mà là một class [11]."
    },
    {
        id: 14, topic: "OOP Fundamentals", type: "text",
        question: "Phương thức nào là điểm khởi đầu (starting point) cho bất kỳ chương trình Java nào?",
        answer: "main()",
        explanation: "Điểm khởi đầu cho bất kỳ chương trình Java nào là phương thức main() [12, 13]."
    },
    {
        id: 15, topic: "OOP Fundamentals", type: "radio",
        question: "Từ khóa 'static' trong phương thức main() có ý nghĩa gì?",
        options: [
            "Nó cần một đối tượng để chạy.",
            "Nó không cần một đối tượng để chạy.",
            "Nó bắt buộc phải trả về một giá trị.",
            "Nó chỉ có thể được gọi từ bên trong class."
        ],
        answer: 1, // Nó không cần một đối tượng để chạy.
        explanation: "Từ khóa 'static' trong main() có nghĩa là phương thức này không cần một đối tượng để chạy, đó là lý do tại sao máy tính bắt đầu với phương thức này trước khi tạo bất kỳ đối tượng nào [12]."
    },

    // --- CHỦ ĐỀ: JAVA CORE: CONSTRUCTORS & ACCESS MODIFIERS ---
    {
        id: 16, topic: "Java Core", type: "radio",
        question: "Mục đích chính của Constructor trong Java là gì?",
        options: ["Thực hiện các hành động phức tạp", "Trả về một giá trị", "Tạo và khởi tạo một đối tượng của class đó", "Gắn thẻ class là 'final'"],
        answer: 2, // Tạo và khởi tạo một đối tượng của class đó
        explanation: "Constructors là các phương thức đặc biệt chịu trách nhiệm tạo và khởi tạo một đối tượng của class đó [14]."
    },
    {
        id: 17, topic: "Java Core", type: "text",
        question: "Điều gì xảy ra nếu một class có constructor có tham số (parameterized constructor) nhưng không có constructor mặc định (default constructor)?",
        answer: "Lỗi biên dịch nếu gọi constructor mặc định.",
        explanation: "Nếu một class chỉ có constructor có tham số, việc gọi constructor mặc định (ví dụ: Game g1 = new Game();) sẽ gây ra lỗi biên dịch [15]."
    },
    {
        id: 18, topic: "Java Core", type: "radio",
        question: "Khi nào thì một constructor mặc định (default constructor) được tự động tạo bởi Java?",
        options: [
            "Luôn luôn.",
            "Khi class không có bất kỳ constructor nào khác được định nghĩa.",
            "Khi class được khai báo là 'abstract'.",
            "Không bao giờ."
        ],
        answer: 1, // Khi class không có bất kỳ constructor nào khác được định nghĩa.
        explanation: "Constructor mặc định là tùy chọn. Nếu bạn không tạo một constructor mặc định, Java sẽ tự động giả định có một constructor mặc định không làm gì cả (empty constructor) [16]."
    },
    {
        id: 19, topic: "Java Core", type: "text",
        question: "Từ khóa nào được sử dụng để đề cập đến đối tượng hiện tại (current object) bên trong một phương thức hoặc constructor?",
        answer: "this",
        explanation: "Từ khóa 'this' là một biến tham chiếu đề cập đến đối tượng hiện tại [17]."
    },
    {
        id: 20, topic: "Java Core", type: "code",
        question: "Đoạn mã sau in ra gì? (Trong bối cảnh class Main có phương thức change(Test t) không có 'new Test()')",
        code: `
class Test { int x; Test(int i) { x = i; } }
class Main {
    public static void change(Test t) {
        t.x = 10;
    }
    public static void main(String[] args) {
        Test t = new Test(5);
        change(t);
        System.out.println(t.x);
    }
}`,
        options: ["5", "10", "Lỗi biên dịch", "null"],
        answer: 1, // 10
        explanation: "Khi truyền đối tượng/tham chiếu, Java tạo một bản sao của tham chiếu và truyền cho phương thức. Nhưng cả hai vẫn trỏ đến cùng một đối tượng trong bộ nhớ (Heap). Việc thay đổi t.x bên trong change() ảnh hưởng đến đối tượng gốc [18]."
    },
    {
        id: 21, topic: "Java Core", type: "radio",
        question: "Mục đích của việc khai báo các trường (fields) là 'private' và cung cấp các phương thức 'public getter/setter' là gì?",
        options: [
            "Giảm chi phí bộ nhớ.",
            "Giảm thiểu sự phức tạp của mã.",
            "Thực hiện Encapsulation (Đóng gói) và kiểm soát việc thay đổi dữ liệu.",
            "Đảm bảo tính đa hình."
        ],
        answer: 2, // Thực hiện Encapsulation (Đóng gói) và kiểm soát việc thay đổi dữ liệu.
        explanation: "Khai báo tất cả các trường là private và tạo các phương thức getter/setter công khai là một thực hành tốt để kiểm soát khi nào và bằng cách nào một trường được thay đổi, hỗ trợ Đóng gói [19, 20]."
    },
    {
        id: 22, topic: "Java Core", type: "radio",
        question: "Một phương thức được khai báo là 'private' thường được gọi là gì?",
        options: ["Utility method", "Helper method", "Public API", "Callback function"],
        answer: 1, // Helper method
        explanation: "Các phương thức private thường được gọi là helper methods (phương thức trợ giúp) vì chúng chỉ có thể được nhìn thấy và gọi bởi cùng một class, được sử dụng để tổ chức và giữ cho mã đơn giản hơn [21]."
    },
    {
        id: 23, topic: "Java Core", type: "radio",
        question: "Nếu không có access modifier (như public, private, protected) nào được chỉ định cho một class/method/variable, access modifier mặc định là gì?",
        options: ["public", "protected", "default (package-private)", "private"],
        answer: 2, // default (package-private)
        explanation: "Nếu không chỉ định một access modifier, class/method/variable sẽ có thể truy cập được bởi tất cả các class khác trong cùng một package [22]."
    },
    {
        id: 24, topic: "Java Core", type: "text",
        question: "Access modifier nào cho phép truy cập thành viên từ cùng một package HOẶC từ các lớp con (subclasses) trong các package khác?",
        answer: "protected",
        explanation: "Các phương thức và thành viên dữ liệu được khai báo là protected có thể truy cập được trong cùng một package hoặc trong các lớp con của các package khác [23]."
    },
    {
        id: 25, topic: "Java Core", type: "radio",
        question: "Từ khóa 'this()' trong một constructor được sử dụng để làm gì?",
        options: ["Gọi constructor của lớp cha", "Gọi constructor khác của chính class hiện tại", "Trả về thể hiện của class hiện tại", "Truy cập biến instance của lớp cha"],
        answer: 1, // Gọi constructor khác của chính class hiện tại
        explanation: "Sử dụng this() để gọi constructor của chính class hiện tại (current class constructor) [24]."
    },

    // --- CHỦ ĐỀ: JAVA CORE: STATIC & FINAL ---
    {
        id: 26, topic: "Java Core", type: "radio",
        question: "Điều gì xảy ra khi một trường (field) được khai báo là 'static'?",
        options: [
            "Giá trị của nó được lưu trữ trong đối tượng (object) và có thể thay đổi.",
            "Giá trị của nó được lưu trữ trong class và chia sẻ bởi tất cả các đối tượng của class đó.",
            "Nó trở thành một hằng số và không thể thay đổi.",
            "Nó được phân bổ trên Stack memory."
        ],
        answer: 1, // Giá trị của nó được lưu trữ trong class và chia sẻ bởi tất cả các đối tượng của class đó.
        explanation: "Khai báo một trường là static có nghĩa là giá trị của nó không còn nằm trong đối tượng nữa mà nằm trong class, và tất cả các đối tượng của class sẽ chia sẻ cùng một giá trị chính xác đó [25]."
    },
    {
        id: 27, topic: "Java Core", type: "text",
        question: "Một phương thức 'static' thường được sử dụng khi nào?",
        answer: "Khi phương thức không cần truy cập bất kỳ trường nào trong đối tượng.",
        explanation: "Phương thức static lý tưởng được sử dụng để tạo một phương thức không cần truy cập bất kỳ trường nào trong đối tượng (i.e., một hàm độc lập) [26]."
    },
    {
        id: 28, topic: "Java Core", type: "radio",
        question: "Phương thức 'static' có thể truy cập các trường (fields) 'non-static' không?",
        options: ["Có, luôn luôn.", "Không, vì các trường non-static phụ thuộc vào sự tồn tại của một thể hiện (instance) của class.", "Chỉ khi được định nghĩa là public.", "Chỉ thông qua từ khóa 'this'."
        ],
        answer: 1, // Không, vì các trường non-static phụ thuộc vào sự tồn tại của một thể hiện (instance) của class.
        explanation: "Không thể truy cập một biến non-static trong ngữ cảnh static, vì các biến non-static phụ thuộc vào sự tồn tại của một thể hiện của class [27]."
    },
    {
        id: 29, topic: "Java Core", type: "radio",
        question: "Một trường (field) được mô tả bằng từ khóa 'final' là gì?",
        options: ["Một biến có thể thay đổi", "Một biến chỉ có thể được thiết lập một lần", "Một biến chỉ có thể được truy cập trong class", "Một biến được chia sẻ bởi tất cả các đối tượng"],
        answer: 1, // Một biến chỉ có thể được thiết lập một lần
        explanation: "Một trường final đơn giản là một hằng số (constant variable), tức là một biến chỉ được thiết lập một lần và không được phép thay đổi lại theo thời gian [28, 29]."
    },
    {
        id: 30, topic: "Java Core", type: "radio",
        question: "Một class được khai báo là 'final' sẽ bị hạn chế điều gì?",
        options: ["Không thể tạo đối tượng từ class đó.", "Các phương thức của nó không thể được gọi.", "Nó không thể được kế thừa (inherited).", "Các trường của nó phải là 'static'."],
        answer: 2, // Nó không thể được kế thừa (inherited).
        explanation: "Final class (class cuối cùng): không thể được kế thừa [27]."
    },
    {
        id: 31, topic: "Java Core", type: "radio",
        question: "Điều gì xảy ra nếu một phương thức được đánh dấu là 'final'?",
        options: ["Nó phải được khai báo là static.", "Nó không thể bị ghi đè (overridden) trong lớp con.", "Nó phải trả về kiểu void.", "Nó chỉ có thể được gọi từ bên trong class."],
        answer: 1, // Nó không thể bị ghi đè (overridden) trong lớp con.
        explanation: "Nếu bạn muốn bảo vệ phương thức của mình khỏi bị ghi đè trong lớp con, bạn có thể thêm tiền tố từ khóa 'final'. Phương thức final không thể bị ghi đè [27, 30]."
    },
    {
        id: 32, topic: "Java Core", type: "text",
        question: "Trong bộ nhớ Java, các đối tượng (objects) được phân bổ động (dynamically allocated) ở khu vực nào?",
        answer: "Heap",
        explanation: "Trong Java, tất cả các đối tượng được phân bổ động trên Heap [31]. Các biến cục bộ (Local variables) được lưu trữ trên Stack memory [31]."
    },
    {
        id: 33, topic: "Java Core", type: "radio",
        question: "Sự khác biệt chính giữa Java reference và C++ pointer là gì?",
        options: ["Java reference có thể lưu trữ địa chỉ bộ nhớ, pointer thì không.", "Pointer là một biến lưu trữ địa chỉ bộ nhớ, Java reference không phải là pointer.", "Java không sử dụng reference.", "Không có sự khác biệt."],
        answer: 1, // Pointer là một biến lưu trữ địa chỉ bộ nhớ, Java reference không phải là pointer.
        explanation: "Java không có con trỏ (pointers), Java có tham chiếu (references). Con trỏ là một biến lưu trữ địa chỉ bộ nhớ (tức là con trỏ là tham chiếu, nhưng tham chiếu không phải là con trỏ) [31, 32]."
    },
    {
        id: 34, topic: "Java Core", type: "text",
        question: "Trong ngữ cảnh kế thừa, từ khóa nào được sử dụng để gọi phương thức của lớp cha (parent method) từ lớp con (child class)?",
        answer: "super",
        explanation: "Để tái sử dụng phương thức của lớp cha trong lớp con, ta sử dụng từ khóa 'super', theo sau là dấu chấm và tên phương thức [33]."
    },
    {
        id: 35, topic: "Java Core", type: "radio",
        question: "Nếu một constructor của lớp con (child’s constructor) không gọi constructor của lớp cha một cách rõ ràng (explicitly) bằng 'super()', điều gì xảy ra?",
        options: [
            "Lỗi biên dịch.",
            "Trình biên dịch Java tự động chèn một lệnh gọi đến constructor mặc định của lớp cha.",
            "Lớp cha sẽ không được khởi tạo.",
            "Lớp con tự động kế thừa tất cả các trường private của lớp cha."
        ],
        answer: 1, // Trình biên dịch Java tự động chèn một lệnh gọi đến constructor mặc định của lớp cha.
        explanation: "Nếu constructor của lớp con không gọi rõ ràng constructor của lớp cha bằng 'super', trình biên dịch Java tự động chèn một lệnh gọi đến constructor mặc định của lớp cha [34]."
    },

    // --- CHỦ ĐỀ: INHERITANCE & POLYMORPHISM ---
    {
        id: 36, topic: "Inheritance", type: "radio",
        question: "Điều kiện nào sau đây là giới hạn lớn trong tính năng kế thừa của Java?",
        options: ["Class không thể kế thừa nhiều hơn hai class.", "Class chỉ có thể kế thừa các class trừu tượng.", "Class không thể kế thừa nhiều hơn một class.", "Không có giới hạn nào."],
        answer: 2, // Class không thể kế thừa nhiều hơn một class.
        explanation: "Một hạn chế lớn trong Java là một class không thể mở rộng nhiều hơn một class (multiple inheritance is not allowed in Java) [35]."
    },
    {
        id: 37, topic: "Inheritance", type: "text",
        question: "Trong ví dụ về cờ vua, việc lớp Queen có thể di chuyển theo cách của Rook (đường thẳng) và Bishop (đường chéo) là một ví dụ cho tính chất nào của OOP?",
        answer: "Polymorphism",
        explanation: "Việc một lớp con (như Queen) có thể được xử lý dựa trên nhiều hình thức hành vi (như Rook và Bishop trong ví dụ cờ vua mô tả tính đa hình)."
    },
    {
        id: 38, topic: "Inheritance", type: "radio",
        question: "Upcasting (Ép kiểu lên) là quá trình nào?",
        options: [
            "Ép kiểu một đối tượng lớp cha thành lớp con, cần làm thủ công.",
            "Ép kiểu một đối tượng lớp con thành kiểu lớp cha hoặc bất kỳ lớp siêu lớp nào, được thực hiện tự động.",
            "Chuyển đổi từ kiểu dữ liệu nguyên thủy sang đối tượng Wrapper.",
            "Chuyển đổi từ kiểu Double sang kiểu Integer."
        ],
        answer: 1, // Ép kiểu một đối tượng lớp con thành kiểu lớp cha hoặc bất kỳ lớp siêu lớp nào, được thực hiện tự động.
        explanation: "Upcasting là khi một đối tượng của lớp con được đối xử như một đối tượng của bất kỳ lớp siêu lớp nào. Upcasting được thực hiện tự động [36, 37]."
    },
    {
        id: 39, topic: "Inheritance", type: "radio",
        question: "Downcasting (Ép kiểu xuống) cần phải được thực hiện như thế nào?",
        options: ["Tự động", "Thủ công", "Chỉ được phép với các kiểu nguyên thủy", "Chỉ được phép trong các phương thức static"],
        answer: 1, // Thủ công
        explanation: "Downcasting phải luôn được thực hiện thủ công [38]."
    },
    {
        id: 40, topic: "Inheritance", type: "radio",
        question: "Nếu một class không phải là Cat, nhưng ta cố gắng downcast một đối tượng Mammal thành Cat (ví dụ: Mammal m = new Mammal(); Cat c = (Cat)m;), điều gì xảy ra?",
        options: ["Lỗi biên dịch.", "Nó chạy bình thường.", "Nó vượt qua quá trình biên dịch nhưng ném ra java.lang.ClassCastException khi chạy.", "Nó chỉ ném ra lỗi nếu class Cat là final."],
        answer: 2, // Nó vượt qua quá trình biên dịch nhưng ném ra java.lang.ClassCastException khi chạy.
        explanation: "Mã này vượt qua quá trình biên dịch, nhưng ném ra ngoại lệ ClassCastException khi chạy vì Mammal không phải là Cat [39]."
    },
    {
        id: 41, topic: "Inheritance", type: "text",
        question: "Toán tử nào được sử dụng để kiểm tra xem một đối tượng có phải là một thể hiện (instance) của một class nào đó (hoặc lớp con) không?",
        answer: "instanceof",
        explanation: "Toán tử instanceof được sử dụng để kiểm tra xem một đối tượng có phải là một thể hiện của một class nào đó (hoặc lớp con) không [38]."
    },
    {
        id: 42, topic: "Inheritance", type: "radio",
        question: "Việc Ghi đè phương thức (Method Overriding) có nghĩa là gì?",
        options: [
            "Định nghĩa lại một phương thức trong lớp con đã được định nghĩa trong lớp cha, với cùng một chữ ký phương thức.",
            "Định nghĩa nhiều phương thức có cùng tên nhưng khác tham số trong cùng một class.",
            "Tạo một phiên bản 'static' của phương thức đó.",
            "Gọi phương thức của lớp cha từ lớp con bằng từ khóa 'super'."
        ],
        answer: 0, // Định nghĩa lại một phương thức trong lớp con đã được định nghĩa trong lớp cha, với cùng một chữ ký phương thức.
        explanation: "Ghi đè (Overriding) về cơ bản có nghĩa là khai báo lại phương thức đó trong lớp con và định nghĩa lại những gì chúng nên làm [40]."
    },
    {
        id: 43, topic: "Inheritance", type: "radio",
        question: "Phương thức nào (nếu tồn tại) được Garbage Collector gọi trên đối tượng MỘT LẦN trước khi thu thập rác?",
        options: ["gc()", "delete()", "finalize()", "dispose()"],
        answer: 2, // finalize()
        explanation: "Trước khi hủy một đối tượng, Garbage Collector gọi phương thức finalize() trên đối tượng đó để thực hiện các hoạt động dọn dẹp [41]."
    },
    {
        id: 44, topic: "Inheritance", type: "text",
        question: "Từ khóa 'throws' trong khai báo phương thức được sử dụng để làm gì?",
        answer: "Thông báo về ngoại lệ mà phương thức có thể ném ra (throw).",
        explanation: "Việc này đi kèm với việc thêm từ khóa 'throws' theo sau là kiểu ngoại lệ trong khai báo phương thức [42]."
    },
    {
        id: 45, topic: "Inheritance", type: "radio",
        question: "Trong thiết kế, nguyên tắc nào nói rằng các thực thể phần mềm nên mở để mở rộng nhưng đóng để sửa đổi?",
        options: ["SRP", "OCP", "LSP", "DIP"],
        answer: 1, // OCP (Open/Closed Principle)
        explanation: "Open/Closed Principle (OCP): Các thực thể phần mềm (lớp, module, hàm) nên mở để mở rộng nhưng đóng để sửa đổi [43]."
    },

    // --- CHỦ ĐỀ: ABSTRACT CLASS & INTERFACE ---
    {
        id: 46, topic: "Abstract Class", type: "radio",
        question: "Điều gì đúng về Lớp Trừu tượng (Abstract Class) trong Java?",
        options: [
            "Nó phải chứa ít nhất một phương thức trừu tượng.",
            "Không thể tạo đối tượng (instance) từ lớp trừu tượng.",
            "Constructor của nó không thể được gọi.",
            "Nó không thể kế thừa bất kỳ class nào khác."
        ],
        answer: 1, // Không thể tạo đối tượng (instance) từ lớp trừu tượng.
        explanation: "Không thể tạo đối tượng của một lớp trừu tượng [44]."
    },
    {
        id: 47, topic: "Interface", type: "radio",
        question: "Mục đích chính của Interface trong Java là gì?",
        options: [
            "Thực hiện đa kế thừa (Multiple Inheritance) bị Java cấm đối với các class.",
            "Cung cấp implementation cho các phương thức trừu tượng.",
            "Bắt buộc tất cả các trường phải là private.",
            "Tạo ra các hằng số toán học."
        ],
        answer: 0, // Thực hiện đa kế thừa (Multiple Inheritance) bị Java cấm đối với các class.
        explanation: "Java giới thiệu các interface để giải quyết vấn đề đa kế thừa [45]. Interface được sử dụng để đạt được đa kế thừa [46]."
    },
    {
        id: 48, topic: "Interface", type: "text",
        question: "Tất cả các trường (fields) trong một interface đều ngầm định (implicitly) là public, static, và gì?",
        answer: "final",
        explanation: "Tất cả các trường trong một interface đều ngầm định là public, static, final [46]."
    },
    {
        id: 49, topic: "Interface", type: "radio",
        question: "Điều gì đúng về các phương thức trong Interface (trước JDK 8)?",
        options: [
            "Chúng phải là default hoặc static.",
            "Chúng ngầm định là public và abstract.",
            "Chúng phải có implementation (thân hàm).",
            "Chúng có thể là private hoặc protected."
        ],
        answer: 1, // Chúng ngầm định là public và abstract.
        explanation: "Tất cả các phương thức trong một interface đều ngầm định là public và abstract, trừ khi chúng là default hoặc static [46]."
    },
    {
        id: 50, topic: "Interface", type: "text",
        question: "Interface phổ biến nào trong Java bao gồm một phương thức duy nhất là CompareTo(), được sử dụng để so sánh hai đối tượng của cùng một kiểu?",
        answer: "Comparable",
        explanation: "Comparable là một interface phổ biến trong Java, bao gồm một phương thức duy nhất là CompareTo() [47]."
    },

    // --- CHỦ ĐỀ: DATA STRUCTURES & JAVA CORE ---
    {
        id: 51, topic: "Data Structures", type: "radio",
        question: "Lớp Wrapper (Wrapper Class) có mục đích gì?",
        options: [
            "Cung cấp các phương thức tiện ích cho các đối tượng.",
            "Gói gọn kiểu dữ liệu nguyên thủy, mang lại cho nó vẻ ngoài của một đối tượng.",
            "Lưu trữ chuỗi ký tự không thể thay đổi.",
            "Định nghĩa các phương thức toán học tĩnh."
        ],
        answer: 1, // Gói gọn kiểu dữ liệu nguyên thủy, mang lại cho nó vẻ ngoài của một đối tượng.
        explanation: "Lớp Wrapper gói gọn một kiểu dữ liệu, mang lại cho nó vẻ ngoài của một đối tượng [48]."
    },
    {
        id: 52, topic: "Data Structures", type: "text",
        question: "Phương thức nào trong các lớp Wrapper được sử dụng để trả về giá trị nguyên thủy (primitive value) của đối tượng Wrapper?",
        answer: "typeValue()",
        explanation: "Tất cả các lớp Wrapper đều có phương thức typeValue(). Phương thức này trả về giá trị của đối tượng dưới dạng kiểu nguyên thủy của nó [49]."
    },
    {
        id: 53, topic: "Data Structures", type: "radio",
        question: "Kiểu dữ liệu nào được sử dụng để đọc input từ command line khi dùng `System.in`?",
        options: ["PrintStream", "Character stream", "Byte stream", "Scanner"],
        answer: 2, // Byte stream
        explanation: "Các luồng chuẩn (Standard streams) là byte streams (chứ không phải character streams) [50]."
    },
    {
        id: 54, topic: "Data Structures", type: "radio",
        question: "Điều gì đúng về String trong Java?",
        options: ["String là một chuỗi ký tự có thể sửa đổi.", "String được tạo thành từ một mảng các kiểu dữ liệu byte.", "String là một chuỗi ký tự không thể sửa đổi (unmodifiable sequence of characters).", "String là một kiểu dữ liệu nguyên thủy."],
        answer: 2, // String là một chuỗi ký tự không thể sửa đổi (unmodifiable sequence of characters).
        explanation: "String: chuỗi ký tự không thể sửa đổi (unmodifiable sequence of characters) [51]."
    },
    {
        id: 55, topic: "Data Structures", type: "text",
        question: "Vùng bộ nhớ đặc biệt nào trong heap lưu trữ các String literal để giảm sử dụng bộ nhớ và cải thiện hiệu suất?",
        answer: "String Pool (hoặc String Intern Pool / String Constant Pool)",
        explanation: "String Pool là khu vực lưu trữ đặc biệt trong heap, lưu trữ các string literal, nhằm giảm sử dụng bộ nhớ và cải thiện hiệu suất [52]."
    },
    {
        id: 56, topic: "Data Structures", type: "code",
        question: "Đoạn mã sau in ra gì? (Với str1 và str2 sử dụng String literal)",
        code: `
String str1 = "Java";
String str2 = "Java";
System.out.println(str1 == str2);`,
        options: ["true", "false", "Lỗi biên dịch", "null"],
        answer: 0, // true
        explanation: "Vì cả hai đều là literal, chúng cùng trỏ đến cùng một thể hiện trong String Pool. '==' so sánh tham chiếu nên trả về true [52, 53]."
    },
    {
        id: 57, topic: "Data Structures", type: "text",
        question: "Class nào trong Java cung cấp các phương thức toán học tĩnh như random(), sin(), hoặc abs()?",
        answer: "Math",
        explanation: "Class Math có một loạt các phương thức tĩnh [54, 55]."
    },
    {
        id: 58, topic: "Data Structures", type: "radio",
        question: "StringBuffer là gì?",
        options: ["Chuỗi ký tự không thể sửa đổi.", "Một Collection được sử dụng để lưu trữ dữ liệu.", "Chuỗi ký tự có thể sửa đổi.", "Một interface."],
        answer: 2, // Chuỗi ký tự có thể sửa đổi.
        explanation: "StringBuffer: chuỗi ký tự có thể sửa đổi (modifiable sequence of characters) [56]."
    },
    {
        id: 59, topic: "Data Structures", type: "radio",
        question: "Hạn chế chính của việc sử dụng Mảng (Arrays) trong Java là gì?",
        options: [
            "Các mảng chỉ có thể lưu trữ kiểu dữ liệu nguyên thủy.",
            "Phải biết chính xác số lượng mục trước khi khởi tạo và không thể thêm/xóa phần tử sau khi khởi tạo.",
            "Không thể sử dụng vòng lặp để truy cập các phần tử.",
            "Các mảng không phải là đối tượng."
        ],
        answer: 1, // Phải biết chính xác số lượng mục trước khi khởi tạo và không thể thêm/xóa phần tử sau khi khởi tạo.
        explanation: "Bạn cần biết chính xác số lượng mục bạn sẽ sử dụng khi khởi tạo mảng, và một khi đã khởi tạo mảng với kích thước cụ thể, bạn không được phép thêm hoặc xóa phần tử [57]."
    },
    {
        id: 60, topic: "Data Structures", type: "text",
        question: "Lớp nào là lớp phổ biến nhất triển khai giao diện List, sử dụng một mảng nội bộ (internally)?",
        answer: "ArrayList",
        explanation: "ArrayList là class phổ biến nhất triển khai giao diện List, sử dụng một mảng nội bộ [58]."
    },

    // --- CHỦ ĐỀ: COLLECTIONS & DATA STRUCTURES (NÂNG CAO) ---
    {
        id: 61, topic: "Collections", type: "radio",
        question: "Cấu trúc dữ liệu Stack trong Java đại diện cho nguyên tắc nào?",
        options: ["First-In, First-Out (FIFO)", "Last-In, First-Out (LIFO)", "Random Access", "Ordered Sequence"],
        answer: 1, // Last-In, First-Out (LIFO)
        explanation: "Collection Stack đại diện cho một stack đối tượng kiểu Last-in, first-out [59]."
    },
    {
        id: 62, topic: "Collections", type: "radio",
        question: "Phương thức nào được sử dụng để thêm một mục vào đỉnh của Stack?",
        options: ["add()", "push()", "insert()", "enqueue()"],
        answer: 1, // push()
        explanation: "Phương thức push(e Item): thêm một mục vào đỉnh của stack [59]."
    },
    {
        id: 63, topic: "Collections", type: "radio",
        question: "Cấu trúc dữ liệu Queue trong Java đại diện cho nguyên tắc nào?",
        options: ["Last-In, First-Out (LIFO)", "First-In, First-Out (FIFO)", "Random Access", "Unordered Collection"],
        answer: 1, // First-In, First-Out (FIFO)
        explanation: "Khác với Stack, Queue là cấu trúc dữ liệu First-In, First-Out [60]."
    },
    {
        id: 64, topic: "Collections", type: "text",
        question: "Giao diện (Interface) đặc biệt nào của Queue cho phép bạn thêm hoặc xóa các phần tử từ cả hai đầu (trước hoặc sau)?",
        answer: "Deque (Double-Ended Queue)",
        explanation: "Deque là một loại Queue đặc biệt, đặc biệt là một queue hai đầu, nghĩa là bạn có thể thêm hoặc xóa các phần tử từ cả hai đầu (front or back) của Deque [60]."
    },
    {
        id: 65, topic: "Collections", type: "radio",
        question: "Mục đích chính của HashMap là gì?",
        options: [
            "Đảm bảo các phần tử được sắp xếp theo thứ tự chèn.",
            "Tăng tốc quá trình tìm kiếm so với ArrayList.",
            "Chỉ lưu trữ các kiểu dữ liệu nguyên thủy.",
            "Thực hiện nguyên tắc LIFO."
        ],
        answer: 1, // Tăng tốc quá trình tìm kiếm so với ArrayList.
        explanation: "HashMap là một loại collection được giới thiệu trong Java để tăng tốc quá trình tìm kiếm so với ArrayList [61]."
    },
    {
        id: 66, topic: "Collections", type: "text",
        question: "Trong HashMap, mỗi mục bạn muốn thêm phải được liên kết với một cái gì đó duy nhất (unique) để truy cập nhanh chóng?",
        answer: "key",
        explanation: "HashMap cho phép bạn liên kết một key với mỗi mục bạn muốn thêm [61]."
    },
    {
        id: 67, topic: "Collections", type: "radio",
        question: "Giao diện Iterator có những phương thức nào để duyệt qua một collection?",
        options: ["size(), get(), clear()", "push(), pop(), peek()", "hasNext(), next(), remove()", "add(), poll(), size()"],
        answer: 2, // hasNext(), next(), remove()
        explanation: "Giao diện Iterator của Java có các phương thức hasNext(), next(), remove() [62]."
    },
    {
        id: 68, topic: "Data Structures", type: "text",
        question: "Phương thức tiện ích nào của String Class trong Java được sử dụng để so sánh chuỗi mà không phân biệt chữ hoa, chữ thường?",
        answer: "equalsIgnoreCase()",
        explanation: "Phương thức boolean equalsIgnoreCase(String) được sử dụng để so sánh chuỗi [63]."
    },
    {
        id: 69, topic: "Data Structures", type: "radio",
        question: "Khi bạn tạo String bằng từ khóa `new String(\"Java\")`, điều gì xảy ra?",
        options: [
            "Chuỗi được lưu trữ duy nhất trong String Pool.",
            "Chuỗi mới được tạo trong Heap.",
            "Tham chiếu được trả về từ String Pool.",
            "Luôn luôn gây ra lỗi biên dịch."
        ],
        answer: 1, // Chuỗi mới được tạo trong Heap.
        explanation: "Sử dụng từ khóa new tạo một chuỗi mới trong heap [64]."
    },
    {
        id: 70, topic: "Data Structures", type: "code",
        question: "Giả sử `newsFeed` là một Stack<String> và các thao tác sau được thực hiện, đầu ra sẽ là gì?",
        code: `
Stack<String> newsFeed = new Stack<>(); 
newsFeed.push("A"); // 1st
newsFeed.push("B"); // 2nd
newsFeed.push("C"); // 3rd
System.out.println(newsFeed.pop());
System.out.println(newsFeed.pop());`,
        options: ["A, B", "B, C", "C, B", "A, C"],
        answer: 2, // C, B
        explanation: "Stack hoạt động theo cơ chế LIFO (Last-In, First-Out). 'C' được thêm vào cuối cùng (top) nên nó được pop() ra đầu tiên, sau đó đến 'B' [59, 65]."
    },

    // --- CHỦ ĐỀ: GENERICS ---
    {
        id: 71, topic: "Generics", type: "radio",
        question: "Generics (Kiểu chung) được giới thiệu trong JDK 5.0 nhằm giải quyết hạn chế nào khi sử dụng kiểu Object để xử lý các thuật toán độc lập với kiểu dữ liệu?",
        options: [
            "Bắt buộc phải sử dụng từ khóa 'super'.",
            "Mất tính đa hình.",
            "Yêu cầu ép kiểu liên tục và không có cơ chế kiểm tra lỗi kiểu ở thời điểm biên dịch.",
            "Không thể sử dụng Collection."
        ],
        answer: 2, // Yêu cầu ép kiểu liên tục và không có cơ chế kiểm tra lỗi kiểu ở thời điểm biên dịch.
        explanation: "Hạn chế khi sử dụng Object là cần ép kiểu liên tục và không có cơ chế kiểm tra lỗi [66]. Generics giúp loại bỏ nhu cầu ép kiểu [67]."
    },
    {
        id: 72, topic: "Generics", type: "text",
        question: "Cú pháp cho Generics class bao gồm danh sách các tham số kiểu (type parameters) nằm bên trong dấu ngoặc nào?",
        answer: "<>",
        explanation: "Bạn có thể xác định kiểu dữ liệu bằng cách chỉ định nó giữa các dấu ngoặc nhọn <> khi khai báo biến ArrayList [67]."
    },
    {
        id: 73, topic: "Generics", type: "radio",
        question: "Điều gì đúng về mối quan hệ kế thừa giữa các kiểu Generic?",
        options: [
            "Pair<Cat> kế thừa Pair<Animal>.",
            "Pair<Animal> kế thừa Pair<Cat>.",
            "Không có mối quan hệ kế thừa nào giữa Pair<Cat> và Pair<Animal>.",
            "Chỉ có thể sử dụng kiểu `Object`."
        ],
        answer: 2, // Không có mối quan hệ kế thừa nào giữa Pair<Cat> và Pair<Animal>.
        explanation: "Không có mối quan hệ kế thừa giữa các kiểu generic khác nhau (ví dụ: Pair<Animal> và Pair<Cat>) [68]."
    },
    {
        id: 74, topic: "Generics", type: "text",
        question: "Để chỉ định rằng một tham số kiểu T phải là kiểu con của một kiểu BoundingType, ta sử dụng cú pháp nào?",
        answer: "<T extends BoundingType>",
        explanation: "Cú pháp cho tham số kiểu bị giới hạn (Bounded type parameters) là <T extends BoundingType>. T phải là kiểu con của BoundingType [69]."
    },
    {
        id: 75, topic: "Generics", type: "radio",
        question: "Wildcard không giới hạn (Unbounded wildcard) được chỉ định bằng ký tự nào?",
        options: ["<T>", "<? extends E>", "<? super E>", "<?>"],
        answer: 3, // <?>
        explanation: "Kiểu wildcard không giới hạn được chỉ định bằng ký tự wildcard '?' (ví dụ: List<?>) [70]."
    },

    // --- CHỦ ĐỀ: EXCEPTION HANDLING ---
    {
        id: 76, topic: "Exception Handling", type: "radio",
        question: "Lỗi nào xảy ra trong khi chương trình đang chạy và có thể khiến chương trình bị crash?",
        options: ["Syntax errors", "Compile-time errors", "Bugs (Logic errors)", "Runtime errors"],
        answer: 3, // Runtime errors
        explanation: "Runtime errors (lỗi thời gian chạy) xảy ra khi chương trình đang chạy và có thể gây ra crash [71]."
    },
    {
        id: 77, topic: "Exception Handling", type: "radio",
        question: "Sự khác biệt chính giữa Error và Exception là gì?",
        options: [
            "Error là vấn đề nghiêm trọng mà ứng dụng KHÔNG nên cố gắng xử lý, trong khi Exception là điều kiện mà ứng dụng CÓ THỂ cố gắng xử lý.",
            "Error có thể được bắt bằng khối 'catch', Exception thì không.",
            "Error chỉ xảy ra ở thời điểm biên dịch.",
            "Không có sự khác biệt."
        ],
        answer: 0, // Error là vấn đề nghiêm trọng mà ứng dụng KHÔNG nên cố gắng xử lý, trong khi Exception là điều kiện mà ứng dụng CÓ THỂ cố gắng xử lý.
        explanation: "Error đại diện cho vấn đề nghiêm trọng mà ứng dụng hợp lý không nên cố gắng xử lý. Exception đại diện cho điều kiện mà ứng dụng hợp lý có thể cố gắng xử lý [72]."
    },
    {
        id: 78, topic: "Exception Handling", type: "text",
        question: "Khối code nào được sử dụng để chứa các câu lệnh có khả năng ném ra ngoại lệ (throw exceptions)?",
        answer: "try",
        explanation: "Các câu lệnh có thể ném ra ngoại lệ được chứa trong một khối try [73]."
    },
    {
        id: 79, topic: "Exception Handling", type: "radio",
        question: "Khối lệnh nào (nếu có) luôn được thực thi sau khi khối 'try' kết thúc, bất kể có ngoại lệ xảy ra hay không?",
        options: ["catch", "throw", "finally", "assert"],
        answer: 2, // finally
        explanation: "Bất kỳ mã nào phải được thực thi sau khi khối try hoàn thành đều được đặt trong khối finally. Khối finally luôn được thực thi [73, 74]."
    },
    {
        id: 80, topic: "Exception Handling", type: "radio",
        question: "Ngoại lệ Checked (Checked Exceptions) là gì?",
        options: [
            "Các ngoại lệ không được kiểm tra ở thời điểm biên dịch.",
            "Các ngoại lệ được kiểm tra ở thời điểm biên dịch, buộc phương thức phải xử lý hoặc chỉ định chúng bằng từ khóa 'throws'.",
            "Chỉ xảy ra trong thời gian chạy.",
            "Các ngoại lệ do người dùng tự định nghĩa."
        ],
        answer: 1, // Các ngoại lệ được kiểm tra ở thời điểm biên dịch, buộc phương thức phải xử lý hoặc chỉ định chúng bằng từ khóa 'throws'.
        explanation: "Checked Exceptions là các ngoại lệ được kiểm tra ở thời điểm biên dịch. Nếu một phương thức ném ra checked exception, nó phải xử lý hoặc chỉ định ngoại lệ đó bằng từ khóa 'throws' [75, 76]."
    },
    {
        id: 81, topic: "Exception Handling", type: "text",
        question: "Ngoại lệ `NullPointerException` thuộc loại Checked hay Unchecked?",
        answer: "Unchecked",
        explanation: "NullPointerException là một ví dụ của ngoại lệ Unchecked (Runtime Exception) [42, 77]."
    },
    {
        id: 82, topic: "Exception Handling", type: "radio",
        question: "Nếu cả lớp cơ sở (Base) và lớp dẫn xuất (Derived) đều được bắt làm ngoại lệ, catch block nào phải xuất hiện trước?",
        options: ["Catch block của lớp Base.", "Catch block của lớp Derived.", "Thứ tự không quan trọng.", "Nó sẽ gây ra lỗi biên dịch nếu cả hai được bắt."],
        answer: 1, // Catch block của lớp Derived.
        explanation: "Nếu cả lớp cơ sở và lớp dẫn xuất đều được bắt làm ngoại lệ, catch block của lớp dẫn xuất phải xuất hiện trước lớp cơ sở [78, 79]."
    },
    {
        id: 83, topic: "Exception Handling", type: "text",
        question: "Để tự tạo ngoại lệ (User-defined exception), class mới phải là lớp con của class nào?",
        answer: "Exception",
        explanation: "Tất cả các ngoại lệ đều là lớp con của class Exception [80]."
    },
    {
        id: 84, topic: "Exception Handling", type: "code",
        question: "Đoạn mã sau in ra gì?",
        code: `
public class ExceptionTest {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("A");
        } finally {
            System.out.println("B");
        }
    }
}`,
        options: ["A", "B", "A và B", "Lỗi runtime không thể bắt"],
        answer: 2, // A và B
        explanation: "Ngoại lệ ArithmeticException được ném ra và bắt (in ra A), sau đó khối finally luôn được thực thi (in ra B) [74, 81]."
    },
    {
        id: 85, topic: "Exception Handling", type: "text",
        question: "Phương thức `System.gc()` được sử dụng để làm gì?",
        answer: "Yêu cầu JVM chạy Garbage Collector.",
        explanation: "Sử dụng System.gc() là một trong hai cách để yêu cầu JVM chạy Garbage Collector [82]."
    },

    // --- CHỦ ĐỀ: DESIGN PATTERNS ---
    {
        id: 86, topic: "Design Patterns", type: "radio",
        question: "Mẫu thiết kế (Design Pattern) là gì?",
        options: [
            "Các class và object cụ thể để sử dụng lại.",
            "Các giải pháp có thể tái sử dụng cho các vấn đề phổ biến trong thiết kế phần mềm.",
            "Các cú pháp bắt buộc trong ngôn ngữ lập trình.",
            "Các thuật toán phức tạp."
        ],
        answer: 1, // Các giải pháp có thể tái sử dụng cho các vấn đề phổ biến trong thiết kế phần mềm.
        explanation: "Design patterns là các giải pháp có thể tái sử dụng cho các vấn đề phổ biến trong thiết kế phần mềm [83, 84]."
    },
    {
        id: 87, topic: "Design Patterns", type: "radio",
        question: "Mẫu thiết kế nào (Design Pattern) tập trung vào việc tạo đối tượng (object creation) để đảm bảo tính linh hoạt và tái sử dụng?",
        options: ["Structural", "Behavioral", "Creational", "Utility"],
        answer: 2, // Creational
        explanation: "Creational patterns (Mẫu khởi tạo): tập trung vào việc tạo đối tượng để đảm bảo tính linh hoạt và tái sử dụng [84, 85]."
    },
    {
        id: 88, topic: "Design Patterns", type: "text",
        question: "Mẫu thiết kế khởi tạo nào (Creational pattern) đảm bảo rằng chỉ có một thể hiện (instance) của một class tồn tại trong hệ thống?",
        answer: "Singleton",
        explanation: "Singleton: đảm bảo rằng chỉ có một thể hiện của class tồn tại [86]."
    },
    {
        id: 89, topic: "Design Patterns", type: "radio",
        question: "Mục đích chính của Factory Method Pattern là gì?",
        options: [
            "Tạo các đối tượng mới bằng cách sao chép một đối tượng hiện có.",
            "Định nghĩa một phương thức để tạo đối tượng, nhưng cho phép các lớp con quyết định class nào để khởi tạo.",
            "Thêm chức năng mới vào đối tượng mà không thay đổi cấu trúc của nó.",
            "Tổ chức đối tượng trong cấu trúc phân cấp."
        ],
        answer: 1, // Định nghĩa một phương thức để tạo đối tượng, nhưng cho phép các lớp con quyết định class nào để khởi tạo.
        explanation: "Mục đích của Factory method pattern là định nghĩa một phương thức để tạo đối tượng, nhưng cho phép các lớp con quyết định class nào để khởi tạo [87]."
    },
    {
        id: 90, topic: "Design Patterns", type: "radio",
        question: "Abstract Factory Pattern khác với Factory Method Pattern ở điểm nào?",
        options: [
            "Abstract Factory tạo ra các families of related objects (nhóm các đối tượng liên quan), trong khi Factory Method tạo ra một loại đối tượng duy nhất.",
            "Abstract Factory dựa trên Subclassing, còn Factory Method dựa trên Composition.",
            "Factory Method yêu cầu constructor private.",
            "Abstract Factory chỉ được sử dụng cho các class trừu tượng."
        ],
        answer: 0, // Abstract Factory tạo ra các families of related objects (nhóm các đối tượng liên quan), trong khi Factory Method tạo ra một loại đối tượng duy nhất.
        explanation: "Factory Method tạo ra một loại đối tượng duy nhất. Abstract Factory tạo ra families of related objects [88]."
    },
    {
        id: 91, topic: "Design Patterns", type: "text",
        question: "Mẫu thiết kế khởi tạo nào (Creational pattern) được sử dụng để tạo đối tượng mới bằng cách sao chép một đối tượng hiện có (prototype)?",
        answer: "Prototype",
        explanation: "Prototype được sử dụng để tạo đối tượng mới bằng cách sao chép một đối tượng hiện có (prototype) [89]."
    },
    {
        id: 92, topic: "Design Patterns", type: "radio",
        question: "Mẫu thiết kế nào (Structural pattern) hoạt động như một cầu nối (bridge) giữa các đối tượng có giao diện không tương thích?",
        options: ["Decorator", "Composite", "Adapter", "Strategy"],
        answer: 2, // Adapter
        explanation: "Adapter pattern giúp các đối tượng có giao diện không tương thích cộng tác bằng cách hoạt động như một cầu nối giữa chúng [90]."
    },
    {
        id: 93, topic: "Design Patterns", type: "radio",
        question: "Mục đích của Composite Pattern là gì?",
        options: [
            "Cho phép thay đổi thuật toán tại thời điểm chạy.",
            "Tổ chức và thao tác các đối tượng trong cấu trúc phân cấp (ví dụ: thư mục chứa tệp và thư mục con).",
            "Đảm bảo chỉ có một instance của class.",
            "Xử lý các stream I/O."
        ],
        answer: 1, // Tổ chức và thao tác các đối tượng trong cấu trúc phân cấp (ví dụ: thư mục chứa tệp và thư mục con).
        explanation: "Composite pattern cung cấp một cách để tổ chức và thao tác các đối tượng trong cấu trúc phân cấp [91]."
    },
    {
        id: 94, topic: "Design Patterns", type: "text",
        question: "Mẫu thiết kế nào (Structural pattern) cho phép bạn thêm chức năng mới một cách linh hoạt (dynamically) vào một đối tượng bằng cách 'gói' (wrapping) đối tượng đó với các lớp bổ sung?",
        answer: "Decorator",
        explanation: "Decorator là một structural design pattern cho phép bạn thêm chức năng mới một cách linh hoạt vào một đối tượng mà không làm thay đổi cấu trúc của nó [92]."
    },
    {
        id: 95, topic: "Design Patterns", type: "radio",
        question: "Strategy Design Pattern thuộc loại nào?",
        options: ["Creational", "Structural", "Behavioral", "Utility"],
        answer: 2, // Behavioral
        explanation: "Strategy design pattern là một mẫu thiết kế Behavioral [93]."
    },
    {
        id: 96, topic: "Design Patterns", type: "radio",
        question: "Strategy Design Pattern được sử dụng khi nào?",
        options: [
            "Khi bạn cần chỉ một instance của một class.",
            "Khi bạn muốn chọn hành vi (thuật toán) của một đối tượng một cách linh hoạt tại thời điểm chạy.",
            "Khi cần ép kiểu giữa các interface không tương thích.",
            "Khi cần tạo một nhóm các đối tượng liên quan."
        ],
        answer: 1, // Khi bạn muốn chọn hành vi (thuật toán) của một đối tượng một cách linh hoạt tại thời điểm chạy.
        explanation: "Strategy pattern được sử dụng khi bạn muốn chọn hành vi (thuật toán) của một đối tượng một cách linh hoạt tại thời điểm chạy [94]."
    },
    {
        id: 97, topic: "Design Patterns", type: "text",
        question: "Mẫu thiết kế nào định nghĩa một nhóm các thuật toán, đóng gói mỗi thuật toán trong một class riêng biệt và làm cho chúng có thể hoán đổi cho nhau?",
        answer: "Strategy",
        explanation: "Strategy design pattern định nghĩa một nhóm các thuật toán, đóng gói mỗi thuật toán trong một class riêng biệt và làm cho chúng có thể hoán đổi cho nhau [93]."
    },
    {
        id: 98, topic: "Design Patterns", type: "radio",
        question: "Trong Strategy Pattern, class nào duy trì một tham chiếu đến đối tượng Strategy và sử dụng nó để thực thi thuật toán?",
        options: ["Strategy Interface", "Concrete Strategy", "Context Class", "Factory"],
        answer: 2, // Context Class
        explanation: "Context class: duy trì một tham chiếu đến đối tượng Strategy và sử dụng nó để thực thi thuật toán [94]."
    },
    {
        id: 99, topic: "Design Patterns", type: "radio",
        question: "Mục đích của Structural Design Patterns là gì?",
        options: [
            "Tập trung vào giao tiếp và trách nhiệm giữa các đối tượng.",
            "Tập trung vào việc tạo đối tượng để đảm bảo tính linh hoạt.",
            "Tập trung vào việc tổ chức và kết hợp các đối tượng để có mối quan hệ hiệu quả.",
            "Tập trung vào xử lý lỗi."
        ],
        answer: 2, // Tập trung vào việc tổ chức và kết hợp các đối tượng để có mối quan hệ hiệu quả.
        explanation: "Structural patterns (Mẫu cấu trúc): tập trung vào việc tổ chức và kết hợp các đối tượng để có mối quan hệ hiệu quả [5, 85]."
    },
    {
        id: 100, topic: "Design Patterns", type: "radio",
        question: "Mẫu thiết kế nào sau đây thuộc Creational Pattern?",
        options: ["Adapter", "Decorator", "Singleton", "Iterator"],
        answer: 2, // Singleton
        explanation: "Singleton là Creational Pattern [85]."
    },
    
    // --- CHỦ ĐỀ: I/O & STREAMS (BỔ SUNG) ---
    {
        id: 101, topic: "I/O Stream", type: "text",
        question: "Trong I/O Stream, một 'stream' được định nghĩa là một chuỗi (sequence) gì?",
        answer: "data",
        explanation: "Stream là một chuỗi dữ liệu [95]."
    },
    {
        id: 102, topic: "I/O Stream", type: "radio",
        question: "Khi làm việc với dữ liệu ký tự (character data) trong Java I/O, nên sử dụng loại stream nào?",
        options: ["Byte streams", "Input streams", "Character streams", "Print streams"],
        answer: 2, // Character streams
        explanation: "Khi tệp chứa dữ liệu ký tự, cách tiếp cận tốt nhất là sử dụng character streams [96, 97]."
    },
    {
        id: 103, topic: "I/O Stream", type: "radio",
        question: "Điều gì xảy ra nếu sử dụng I/O không đệm (unbuffered I/O)?",
        options: [
            "Mỗi yêu cầu đọc/ghi được xử lý trực tiếp bởi HĐH, làm cho chương trình kém hiệu quả hơn.",
            "Dữ liệu được lưu trữ trong bộ đệm tạm thời.",
            "Tốc độ thực thi được cải thiện đáng kể.",
            "Chỉ có thể đọc dữ liệu byte."
        ],
        answer: 0, // Mỗi yêu cầu đọc/ghi được xử lý trực tiếp bởi HĐH, làm cho chương trình kém hiệu quả hơn.
        explanation: "I/O không đệm làm cho chương trình kém hiệu quả hơn vì mỗi yêu cầu đọc hoặc ghi được xử lý trực tiếp bởi HĐH [98]."
    },
    {
        id: 104, topic: "I/O Stream", type: "text",
        question: "Để lưu một đối tượng Java vào cơ sở dữ liệu hoặc truyền qua mạng, ta cần chuyển đổi trạng thái của đối tượng thành một byte stream bằng cách sử dụng kỹ thuật nào?",
        answer: "Serialization",
        explanation: "Để lưu một đối tượng Java, ta cần chuyển đổi trạng thái của đối tượng thành một byte stream bằng cách sử dụng Serialization [99]."
    },
    {
        id: 105, topic: "I/O Stream", type: "radio",
        question: "Để làm cho một đối tượng Java có thể được tuần tự hóa (serializable), nó cần triển khai interface nào?",
        options: ["Comparable", "Cloneable", "java.io.Serializable", "Runnable"],
        answer: 2, // java.io.Serializable
        explanation: "Để làm cho đối tượng có thể tuần tự hóa, ta cần triển khai marker interface java.io.Serializable [99]."
    }
    
];