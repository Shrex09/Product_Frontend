import { useState, useEffect } from 'react';
import './SplitBill.css';

interface SplitBillModalProps {
    isOpen: boolean;
    onClose: () => void;
    totalAmount: number;
}

interface Person {
    id: number;
    name: string;
    amount?: number;
    percentage?: number;
}

const SplitBillModal = ({ isOpen, onClose, totalAmount }: SplitBillModalProps) => {
    const [activeTab, setActiveTab] = useState<'equally' | 'amount' | 'percentage'>('equally');
    const [people, setPeople] = useState<Person[]>([
        { id: 1, name: 'Person 1', amount: 0, percentage: 0 },
        { id: 2, name: 'Person 2', amount: 0, percentage: 0 },
        { id: 3, name: 'Person 3', amount: 0, percentage: 0 }
    ]);
    const [splitDisplayAmount, setSplitDisplayAmount] = useState<number>(0);

    // Initial Split Calculation Logic
    useEffect(() => {
        if (!isOpen) return;

        // Reset or init logic could go here
        if (activeTab === 'equally') {
            if (people.length > 0) {
                setSplitDisplayAmount(totalAmount / people.length);
            } else {
                setSplitDisplayAmount(0);
            }
        }
    }, [people.length, totalAmount, activeTab, isOpen]);

    // Validation Logic
    const getTotalEnteredAmount = () => people.reduce((sum, p) => sum + (p.amount || 0), 0);
    const getTotalEnteredPercentage = () => people.reduce((sum, p) => sum + (p.percentage || 0), 0);

    const remainingAmount = totalAmount - getTotalEnteredAmount();
    const remainingPercentage = 100 - getTotalEnteredPercentage();

    const isValid = () => {
        if (activeTab === 'equally') return people.length > 0;
        if (activeTab === 'amount') return Math.abs(remainingAmount) < 0.01;
        if (activeTab === 'percentage') return Math.abs(remainingPercentage) < 0.01;
        return false;
    };

    if (!isOpen) return null;

    const handleAddPerson = () => {
        const newId = people.length > 0 ? Math.max(...people.map(p => p.id)) + 1 : 1;
        setPeople([...people, { id: newId, name: `Person ${newId}`, amount: 0, percentage: 0 }]);
    };

    const handleDeletePerson = (id: number) => {
        if (people.length > 1) {
            setPeople(people.filter(p => p.id !== id));
        }
    };

    const handleAmountChange = (id: number, val: string) => {
        const num = parseFloat(val) || 0;
        setPeople(people.map(p => p.id === id ? { ...p, amount: num } : p));
    };

    const handlePercentageChange = (id: number, val: string) => {
        const num = parseFloat(val) || 0;
        setPeople(people.map(p => p.id === id ? { ...p, percentage: num } : p));
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="split-bill-sheet" onClick={(e) => e.stopPropagation()}>
                <div className="split-header">
                    <div className="split-handle"></div>
                    <h2 className="split-title">Split Bill</h2>
                    <div className="split-total-label">Total</div>
                    <div className="split-total-amount">AED {totalAmount.toFixed(2)}</div>
                </div>

                {/* Tabs */}
                <div className="split-tabs">
                    <div className={`split-tab ${activeTab === 'equally' ? 'active' : ''}`} onClick={() => setActiveTab('equally')}>Equally</div>
                    <div className={`split-tab ${activeTab === 'amount' ? 'active' : ''}`} onClick={() => setActiveTab('amount')}>Amount</div>
                    <div className={`split-tab ${activeTab === 'percentage' ? 'active' : ''}`} onClick={() => setActiveTab('percentage')}>Percentage</div>
                </div>

                {/* Validation Message */}
                {activeTab === 'amount' && (
                    <div className={`validation-message ${Math.abs(remainingAmount) < 0.01 ? 'success' : 'error'}`}>
                        {Math.abs(remainingAmount) < 0.01 ? 'Perfect! Total matches.' : `Remaining: AED ${remainingAmount.toFixed(2)}`}
                    </div>
                )}
                {activeTab === 'percentage' && (
                    <div className={`validation-message ${Math.abs(remainingPercentage) < 0.01 ? 'success' : 'error'}`}>
                        {Math.abs(remainingPercentage) < 0.01 ? 'Perfect! Total is 100%.' : `Remaining: ${remainingPercentage.toFixed(1)}%`}
                    </div>
                )}

                {/* List */}
                <div className="split-persons-list">
                    <div className="split-section-label">
                        {activeTab === 'equally' && 'Split Equally'}
                        {activeTab === 'amount' && 'Enter Amount per Person'}
                        {activeTab === 'percentage' && 'Enter Percentage per Person'}
                    </div>

                    {people.map((person) => (
                        <div key={person.id} className="person-row">
                            <div className="person-avatar">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="person-name">{person.name}</div>

                            {/* Input Logic */}
                            {activeTab === 'equally' && (
                                <div className="person-amount">AED {splitDisplayAmount.toFixed(2)}</div>
                            )}

                            {activeTab === 'amount' && (
                                <input
                                    className="person-input"
                                    type="number"
                                    value={person.amount || ''}
                                    placeholder="0"
                                    onChange={(e) => handleAmountChange(person.id, e.target.value)}
                                />
                            )}

                            {activeTab === 'percentage' && (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        className="person-input"
                                        type="number"
                                        value={person.percentage || ''}
                                        placeholder="0"
                                        onChange={(e) => handlePercentageChange(person.id, e.target.value)}
                                    />
                                    <span style={{ marginRight: '12px', fontWeight: '600', color: '#718096' }}>%</span>
                                </div>
                            )}

                            <div className="person-delete" onClick={() => handleDeletePerson(person.id)}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </div>
                        </div>
                    ))}

                    <div className="add-person-row" onClick={handleAddPerson}>
                        <div className="add-icon-circle">+</div>
                        <span>Add Person</span>
                    </div>
                </div>

                <button
                    className="split-continue-btn"
                    onClick={onClose}
                    style={{ opacity: isValid() ? 1 : 0.5, pointerEvents: isValid() ? 'auto' : 'none' }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default SplitBillModal;
