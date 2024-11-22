/**
 * 메인 페이지
 */
'use client';

import React from 'react';
import { useState } from 'react';
import { Brain, Code, Sparkles, User, Lock } from 'lucide-react';

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    buttonText: string;
    buttonAction: () => void;
    disabled?: boolean;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    icon,
    buttonText,
    buttonAction,
    disabled = false
}) => (
    <div className="backdrop-blur-xl bg-white/70 border border-white/20 shadow-xl rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center gap-2 text-purple-600 text-lg font-semibold mb-4">
            {icon}
            {title}
        </div>
        <p className="text-slate-600 mb-6">
            {description}
        </p>
        <button 
            onClick={buttonAction}
            disabled={disabled}
            className={`w-full py-2 px-4 rounded-lg text-white transition-colors ${
                disabled 
                    ? 'bg-slate-400 opacity-50' 
                    : 'bg-purple-500 hover:bg-purple-600 shadow-lg'
            }`}
        >
            {buttonText}
        </button>
    </div>
);

interface LoginModalProps {
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50" onClick={onClose}>
        <div className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-lg p-6" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">시작하기</h2>
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-medium text-slate-700">이메일</label>
                    <div className="flex items-center mt-1">
                        <User className="w-5 h-5 text-slate-400 absolute ml-3" />
                        <input 
                            type="email" 
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg bg-white/50" 
                            placeholder="your@email.com" 
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium text-slate-700">비밀번호</label>
                    <div className="flex items-center mt-1">
                        <Lock className="w-5 h-5 text-slate-400 absolute ml-3" />
                        <input 
                            type="password" 
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg bg-white/50" 
                            placeholder="••••••••" 
                        />
                    </div>
                </div>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg">
                    로그인
                </button>
                <div className="flex justify-between text-sm">
                    <button className="text-purple-600 hover:text-purple-700">
                        회원가입
                    </button>
                    <button className="text-slate-500 hover:text-slate-600">
                        비밀번호 찾기
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const MainPage: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-30" />
        </div>

        {/* Main content */}
        <div className="relative container mx-auto px-4 py-16">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="inline-block mb-6">
                    <Sparkles className="w-12 h-12 text-purple-500 mx-auto" />
                </div>
                <h1 className="text-6xl font-bold mb-4 text-slate-800">
                    미궁 겜
                </h1>
                <p className="text-xl text-slate-600">내 동년배들 다 미궁게임 해봤다</p>
            </div>

            {/* Game Modes */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card
                    title="정수 모드"
                    description="정수용"
                    icon={<Brain className="w-6 h-6" />}
                    buttonText="시작하기"
                    buttonAction={() => setShowLogin(true)}
                />
                <Card
                    title="그 외 차차 추가할 모드"
                    description="나중에 만들어서 추가할게요"
                    icon={<Code className="w-6 h-6" />}
                    buttonText="컴잉순"
                    buttonAction={() => {}}
                    disabled
                />
            </div>

            {/* Login Modal */}
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </div>
    </div>
    );
};

export default MainPage;