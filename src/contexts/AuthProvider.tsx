import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "../lib/axios"; // axios 경로 확인

// User 타입 정의
interface User {
  id: number;
  name: string;
  email: string;
}

// AuthContext에서 제공할 기능들 정의
interface AuthContextProps {
  user: User | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  updateMe: (formData: FormData) => Promise<void>;
}

// AuthContext 생성 및 기본값 설정
const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
  updateMe: async () => {},
});

// AuthProvider에서 자식 요소를 받기 위한 props 타입 정의
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider 컴포넌트
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  // 현재 사용자 정보 가져오기
  async function getMe() {
    const res = await axios.get("/users/me");
    const nextUser: User = res.data;
    setUser(nextUser);
  }

  // 로그인 함수
  async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    await axios.post("/auth/login", { email, password });
    await getMe();
  }

  // 로그아웃 함수
  async function logout() {
    await axios.delete("/auth/logout");
    setUser(null); // avatar 상태가 없기 때문에 setUser(null)로 수정
  }

  // 사용자 정보 업데이트 함수
  async function updateMe(formData: FormData) {
    const res = await axios.patch("/users/me", formData);
    const nextUser: User = res.data;
    setUser(nextUser);
  }

  // 컴포넌트가 마운트될 때 사용자 정보를 가져옴
  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, updateMe }}>
      {children}
    </AuthContext.Provider>
  );
}

// AuthContext를 사용하기 위한 커스텀 훅
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("반드시 AuthProvider 안에서 사용해야 합니다.");
  }

  return context;
}
