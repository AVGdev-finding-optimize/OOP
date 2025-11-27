// Ngân hàng câu hỏi đầy đủ
// Type: "radio" (trắc nghiệm), "text" (điền từ), "code" (đọc code)
const QUESTION_BANK = [
    // --- CHỦ ĐỀ: OOP BASIC ---
    {
        id: 1, topic: "OOP", type: "radio",
        question: "Tính chất nào của OOP cho phép che giấu dữ liệu và chỉ truy cập thông qua các phương thức công khai?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
        answer: 2,
        explanation: "Encapsulation (Đóng gói) sử dụng private fields và public getter/setter."
    },
    {
        id: 2, topic: "OOP", type: "text",
        question: "Từ khóa nào trong Java được sử dụng để gọi constructor của lớp cha?",
        answer: "super",
        explanation: "Từ khóa 'super()' dùng để gọi constructor của lớp cha."
    },

    // --- CHỦ ĐỀ: JAVA CORE ---
    {
        id: 3, topic: "Java Core", type: "radio",
        question: "Wrapper Class của kiểu dữ liệu 'int' là gì?",
        options: ["Int", "Integer", "Number", "Double"],
        answer: 1,
        explanation: "Trong Java, Wrapper Class của int là Integer."
    },
    {
        id: 4, topic: "Java Core", type: "code",
        question: "Đoạn mã sau in ra gì?",
        code: `
String s1 = "Hello";
String s2 = new String("Hello");
System.out.println(s1 == s2);`,
        options: ["true", "false", "Lỗi biên dịch", "null"],
        answer: 1,
        explanation: "s1 nằm trong String Pool, s2 nằm trong Heap. '==' so sánh địa chỉ vùng nhớ nên trả về false."
    },

    // --- CHỦ ĐỀ: COLLECTIONS ---
    {
        id: 5, topic: "Collections", type: "radio",
        question: "Cấu trúc dữ liệu nào cho phép lưu trữ các phần tử trùng lặp và duy trì thứ tự chèn?",
        options: ["HashSet", "ArrayList", "HashMap", "TreeSet"],
        answer: 1,
        explanation: "ArrayList là một List, cho phép trùng lặp và duy trì thứ tự."
    },

    // --- CHỦ ĐỀ: DESIGN PATTERNS ---
    {
        id: 6, topic: "Design Pattern", type: "text",
        question: "Mẫu thiết kế nào đảm bảo một lớp chỉ có duy nhất một thể hiện (instance)?",
        answer: "singleton",
        explanation: "Singleton Pattern ngăn tạo nhiều instance."
    },
    {
        id: 7, topic: "Design Pattern", type: "radio",
        question: "Mẫu thiết kế nào cho phép thay đổi hành vi của thuật toán tại thời điểm chạy (Runtime)?",
        options: ["Factory", "Strategy", "Adapter", "Singleton"],
        answer: 1,
        explanation: "Strategy Pattern định nghĩa họ thuật toán và cho phép hoán đổi chúng."
    },
    {
        id: 8, topic: "Design Pattern", type: "code",
        question: "Đoạn code sau cài đặt mẫu gì?",
        code: `
interface Shape { void draw(); }
class Circle implements Shape { ... }
class ShapeFactory {
   public Shape getShape(String type) {
      if(type == "CIRCLE") return new Circle();
      return null;
   }
}`,
        options: ["Singleton", "Factory Method", "Prototype", "Builder"],
        answer: 1,
        explanation: "Lớp Factory quyết định tạo đối tượng nào dựa trên tham số đầu vào."
    },

    // --- CHỦ ĐỀ: EXCEPTIONS ---
    {
        id: 9, topic: "Exceptions", type: "radio",
        question: "ArithmeticException là loại ngoại lệ nào?",
        options: ["Checked Exception", "Unchecked Exception", "Error", "Compile-time Exception"],
        answer: 1,
        explanation: "ArithmeticException kế thừa RuntimeException, là Unchecked."
    },

    // Bạn có thể copy thêm nhiều câu hỏi vào đây...
    {
        id: 10, topic: "Generics", type: "code",
        question: "Dòng nào gây lỗi biên dịch?",
        code: `
List<Object> list = new ArrayList<String>(); // 1
List<?> list2 = new ArrayList<String>(); // 2`,
        options: ["Dòng 1", "Dòng 2", "Cả 2", "Không có"],
        answer: 0,
        explanation: "Generics không đa hình kiểu đó. List<Object> không phải cha của List<String>."
    }
];